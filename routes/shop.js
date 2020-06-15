const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.post('/', shopController.createShop);
router.get('/', shopController.getShops);
router.post('/delete', shopController.deleteShops);

module.exports = router;
