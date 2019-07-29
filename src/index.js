import Express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

const app = new Express();

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
