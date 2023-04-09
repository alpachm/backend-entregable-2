const Transfer = require('../models/transfer.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const transfers = catchAsync(async (req, res) => {
  const { amount, reciverUserId } = req.body;

  const transfer = await Transfer.create({
    amount,
    reciverUserId,
  });

  if (!amount) return next(new AppError('You must enter the amount', 400));

  if (!reciverUserId)
    return next(new AppError('You must enter the user ID', 400));

  res.status(200).json({
    status: 'success',
    message: 'Transfer is successfull',
    transfer,
  });
});

module.exports = {
  transfers,
};
