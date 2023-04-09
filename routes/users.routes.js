const express = require('express');
const {
  signup,
  login,
  history,
  forgotPassword,
} = require('../controllers/users.controller');
const {
  validUserExist,
  validUser,
} = require('../middlewares/users.middleware');
const { usersValidations } = require('../middlewares/validations.middleware');

const router = express.Router();

router
  .post('/signup', validUser, usersValidations, signup)
  .post('/login', login);

router.route('/:id').get(validUserExist, history).patch(forgotPassword);

module.exports = router;
