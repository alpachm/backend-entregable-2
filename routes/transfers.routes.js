const express = require('express');
const { transfers } = require('../controllers/transfers.controllers');
const {
  transferValidations,
} = require('../middlewares/validations.middleware');
const {
  validReciverExist,
  validSenderExist,
} = require('../middlewares/transfers.middleware');

const router = express.Router();

router.post(
  '/',
  validReciverExist,
  validSenderExist,
  transferValidations,
  transfers
);

module.exports = router;
