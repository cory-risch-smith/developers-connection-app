import Express from 'express';
import userCtl from '../controller/userController.js';
import validator from '../helpers/validator.js';

const userRoute = new Express.Router();

// Get all user and creat new user
userRoute
	.route('/')
	.get(userCtl.userList)
	.post(validator.createRules(), validator.validate, userCtl.userCreate);

//
userRoute
	.route('/:userId')
	.get(userCtl.userRead)
	.put(validator.updateRules(), validator.validate, userCtl.userUpdate)
	.delete(userCtl.userRemove);

// get users id from params
userRoute.param('userId', userCtl.userByID);

export default userRoute;
