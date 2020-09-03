/** @format */

import Express from 'express';
import userCtl from '../controller/userController.js';
import validator from '../helpers/validator.js';
import authCtl from '../controller/authController.js';

const userRoute = new Express.Router();

// Get all user and creat new user
userRoute.route('/').get(userCtl.userList).post(validator.createRules(), validator.validate, userCtl.userCreate);

//
userRoute
  .route('/:userId')
  .put(authCtl.requiredSigned, validator.updateRules(), validator.validate, userCtl.userUpdate)
  .get(authCtl.requiredSigned, userCtl.userRead)
  .delete(authCtl.requiredSigned, userCtl.userRemove);

// get users id from params
userRoute.param('userId', userCtl.userByID);

export default userRoute;
