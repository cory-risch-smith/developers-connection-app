import Express from 'express';

const authRoute = new Express.Router();

authRoute.get('/', (req, res) => {
	const data = 'this is the Auth Route';
	return res.status(200).json({ msg: true, data });
});

export default authRoute;
