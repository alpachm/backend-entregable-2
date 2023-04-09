const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/users.routes');
const transfersRouter = require('./routes/transfers.routes');
const AppError = require('./utils/appError');
const { globalHandlerError } = require('./controllers/error.controller');

const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transfersRouter);

app.use('*', (req, res, next) => {
  return next(new AppError(`The route ${req.originalUrl} can't be found`, 404));
});

app.use(globalHandlerError);

module.exports = app;
