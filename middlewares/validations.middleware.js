const { body, validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

const usersValidations = [
  body('name')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isString()
    .withMessage('Must be a valid name'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 5 })
    .withMessage('The password must have a minimum of 5 characters'),
  validateFields,
];

const transferValidations = [
  body('amount')
    .notEmpty()
    .withMessage('Amount cannot be empty')
    .isNumeric()
    .withMessage('Must be a valid amount'),
  body('reciverUserId')
    .notEmpty()
    .withMessage('Reciver User Id cannot be empty')
    .isNumeric()
    .withMessage('Must be a valid ID'),
  validateFields,
];

module.exports = { usersValidations, transferValidations };
