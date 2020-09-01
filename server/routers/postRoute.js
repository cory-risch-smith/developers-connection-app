import Express from 'express';

const postRoute = new Express.Router();

postRoute.get('/', (req, res) => {
	const data = 'this is the post route';
	return res.status(200).json({ msg: true, data });
});

export default postRoute;
