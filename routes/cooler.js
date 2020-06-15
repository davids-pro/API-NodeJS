const express = require('express');
const coolerController = require('../controllers/cooler');

const router = express.Router();

router.post('/', coolerController.createCooler);
router.get('/', coolerController.getCoolers);
router.post('/delete', coolerController.deleteCoolers);

module.exports = router;
