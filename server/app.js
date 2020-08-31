import Express from 'express';
import morgan from 'morgan';

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(morgan('dev'));

export default app;
