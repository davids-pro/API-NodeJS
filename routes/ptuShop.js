const express = require('express');
const ptuShopController = require('../controllers/ptuShop');

const router = express.Router();

router.post('/', ptuShopController.createPtuShop);
router.get('/', ptuShopController.getPtuShops);
router.post('/delete', ptuShopController.deletePtuShops);

module.exports = router;
