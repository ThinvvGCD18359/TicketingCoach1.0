const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/CheckoutController');

router.post('/', checkoutController.checkout);

module.exports = router;