const express = require('express');
const ptuMiningLaserController = require('../controllers/ptuMiningLaser');

const router = express.Router();

router.post('/', ptuMiningLaserController.createPtuMiningLaser);
router.get('/', ptuMiningLaserController.getPtuMiningLasers);
router.post('/delete', ptuMiningLaserController.deletePtuMiningLasers);

module.exports = router;
