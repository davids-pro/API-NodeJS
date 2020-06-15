const express = require('express');
const miningLaserController = require('../controllers/miningLaser');

const router = express.Router();

router.post('/', miningLaserController.createMiningLaser);
router.get('/', miningLaserController.getMiningLasers);
router.post('/delete', miningLaserController.deleteMiningLasers);

module.exports = router;
