import Express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routers/index.js';
const app = Express();

// App middleware
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
});

// Routers
app.use('/', routes);

export default app;
