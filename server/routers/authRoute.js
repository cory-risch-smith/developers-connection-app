/** @format */

import Express from 'express';
import authController from '../controller/authController.js';
import validator from '../helpers/validator.js';

const authRoute = new Express.Router();

// User signIn
authRoute.post('/logIn', validator.loginRules(), validator.validate, authController.signIn);

export default authRoute;
