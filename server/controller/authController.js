/** @format */

import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import config from '../config/config.js';

export default {
  // SignIn
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const isUser = await User.findOne({ email: email });
      if (!isUser) {
        return res.status(401).json({ data: { msg: false, error: 'User Not Found' } });
      }
      // console.log(isUser.comparePassword(password));
      if (!isUser.comparePassword(password)) {
        return res.status(401).json({ data: { msg: false, error: 'Password Does not Match' } });
      }
      const token = jwt.sign({ _id: isUser._id }, config.JWTKey, { expiresIn: 9999 });
      const user = { _id: isUser._id, firstName: isUser.firstName, lastName: isUser.lastName, email: isUser.email };
      return res.status(200).json({ data: { msg: true, user, token } });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: { msg: false, error: err } });
    }
  },

  requiredSigned: (req, res, next) => {
    try {
      const originalToken = req.header('Authorization');
      if (!originalToken) {
        return res.status(401).json({ data: { msg: false, error: 'You are not registered user' } });
      }
      const decoded = jwt.verify(originalToken, config.JWTKey);
      res.user = decoded;
      next();
    } catch (err) {
      return res.status(500).json({ data: { msg: false, error: err } });
    }
  },
};
