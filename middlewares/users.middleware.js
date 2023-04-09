const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const validUserExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!user) return next(new AppError('User not found', 404));

  next();
});

const validUser = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;

  if (!name) return next(new AppError('Name is required', 400));

  if (!password) return next(new AppError('Password is required', 400));

  next();
});

module.exports = {
  validUserExist,
  validUser,
};
