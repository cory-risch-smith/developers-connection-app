import Express from 'express';
import userRoute from './userRoute.js';
import authRoute from './authRoute.js';
import postRoute from './postRoute.js';

const router = new Express.Router();

router.get('/api', (req, res) => {
	const data = 'this is the rest route ';
	return res.status(200).json({ msg: true, data });
});

router.use('/api/user', userRoute);
router.use('/api/auth', authRoute);
router.use('/api/post', postRoute);
export default router;
