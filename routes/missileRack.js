const express = require('express');
const missileRackController = require('../controllers/missileRack');

const router = express.Router();

router.post('/', missileRackController.createMissileRack);
router.get('/', missileRackController.getMissileRacks);
router.post('/delete', missileRackController.deleteMissileRacks);

module.exports = router;
