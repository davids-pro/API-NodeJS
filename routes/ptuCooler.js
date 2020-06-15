const express = require('express');
const ptuCoolerController = require('../controllers/ptuCooler');

const router = express.Router();

router.post('/', ptuCoolerController.createPtuCooler);
router.get('/', ptuCoolerController.getPtuCoolers);
router.post('/delete', ptuCoolerController.deletePtuCoolers);

module.exports = router;
