import mongoose from 'mongoose';
import config from '../config/config.js';

const { mongoOPT, MongoUrl } = config;
const { connect } = mongoose;
export default async () => {
	try {
		await connect(MongoUrl, mongoOPT);
		console.log(`Database is connected with the server.... 🚀 🚀 🚀`);
	} catch (err) {
		console.log(err);
	}
};
