const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signup = catchAsync(async (req, res, next) => {
  const { name, password, status } = req.body;

  const user = await User.create({
    name,
    password,
    accountNumber: Math.floor(Math.random() * 1000000000),
    status,
  });

  if (!name) return next(new AppError('Name is required', 400));

  if (!password) return next(new AppError('Password is require', 400));

  res.status(201).json({
    status: 'success',
    message: 'The user has been created',
    user,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { accountNumber, password } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber,
      password,
      status: 'active',
    },
  });

  if (!user) return next(new AppError('Data error', 404));

  res.status(200).json({
    status: 'success',
    message: 'The user has been login',
    user,
  });
});

const forgotPassword = catchAsync(async (req, res, next) => {
  const { accountNumber, password } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber: accountNumber,
    },
  });

  if (!user) return next(new AppError('User not found', 404));

  await user.update({
    password: password,
  });

  res.status(200).json({
    status: 'success',
    message: 'The password was update',
    user,
  });
});

const history = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'User history has been found',
  });
});

module.exports = {
  signup,
  login,
  history,
  forgotPassword,
};
