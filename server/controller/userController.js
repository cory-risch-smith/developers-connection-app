/** @format */

import User from '../models/User.js';
const result = 'The User Is registered';
import lodash from 'lodash';
const { extend } = lodash;

export default {
  // Get all Users
  userList: async (req, res) => {
    try {
      const users = await User.find().select('-password');
      return res.status(200).json({ data: { msg: true, users } });
    } catch (err) {
      return res.status(500).json({ data: { msg: false, error: err } });
    }
  },
  //Create User
  userCreate: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const isUser = await User.findOne({ email });
      if (isUser) {
        return res.status(400).json({ data: { msg: false, user: 'USER_ALREADY_EXISTS' } });
      }
      const user = await User.create({ firstName, lastName, email });
      await user.setPassword(password);
      return res.status(200).json({ data: { msg: true, result } });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: { msg: false, error: err } });
    }
  },
  // View single user
  userRead: async (req, res) => {
    req.profile.password = undefined;
    const profile = req.profile;
    return res.status(200).json({ data: { msg: true, profile } });
  },
  // Update user
  userUpdate: async (req, res) => {
    try {
      let user = req.profile;
      user = extend(user, req.body);
      await user.setPassword(req.body.password);
      user.updated = Date.now();
      await user.save();
      user.password = undefined;
      return res.status(200).json({ data: { msg: true, user } });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: { msg: false, error: err } });
    }
  },
  // delete user
  userRemove: async (req, res) => {
    try {
      const user = req.profile;
      const deletedUser = await user.remove();
      deletedUser.password = undefined;
      return res.status(200).json({ data: { msg: true, deletedUser } });
    } catch (err) {
      return res.status(500).json({ data: { msg: false, error: err } });
    }
  },
  // user params
  userByID: async (req, res, next, id) => {
    try {
      let user = await User.findById(id);
      if (!user) {
        return res.status(400).json({
          error: 'User not found',
        });
      }
      req.profile = user;
      next();
    } catch (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
  },
};
