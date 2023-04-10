const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const validReciverExist = catchAsync(async (req, res, next) => {
  const { reciverUserId } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber: reciverUserId,
    },
  });

  if (!user)
    return next(new AppError('Account number of reciver user is invalid', 404));

  req.user = user;

  next();
});

const validSenderExist = catchAsync(async (req, res, next) => {
  const { senderUserId, amount } = req.body;

  const senderUser = await User.findOne({
    where: {
      accountNumber: senderUserId,
    },
  });

  if (!senderUser)
    return next(new AppError('Account number of sender user is invalid', 404));

  if (amount > senderUser.dataValues.amount)
    return next(new AppError('Insufficient money', 400));

  next();
});

module.exports = { validReciverExist, validSenderExist };
