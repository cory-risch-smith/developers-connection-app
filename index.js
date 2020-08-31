import http from 'http';
import app from './server/app.js';
import config from './server/config/config.js';
import dbController from './server/controller/dbController.js';

const { port } = config;
const server = http.createServer(app);
// Database
dbController();

server.listen(port, () => {
	console.log(`Server is running on the Port ${port}.... 🌵 🌵 🌵`);
});
