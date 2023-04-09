const express = require('express');
const { transfers } = require('../controllers/transfers.controllers');
const {
  transferValidations,
} = require('../middlewares/validations.middleware');

const router = express.Router();

router.post('/', transferValidations, transfers);

module.exports = router;
