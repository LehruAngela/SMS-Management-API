import Express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jsend from 'jsend';
require('dotenv').config();

const app = new Express();

/**
 * Register essential middleware
 * for express app
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(jsend.middleware);

/**
 * Register the routes
 */
app.use('/', routes);

app.listen(8000, () => {
  console.log('SMS API listening on port: http://localhost:8000');
});

/**
 * Create a connection to the database.
 */
mongoose.connect(
  'mongodb://localhost/sms-api',
  { useNewUrlParser: true, useCreateIndex: true }
);

export default app;
