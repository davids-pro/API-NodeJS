const express = require('express');
const ptuMissileRackController = require('../controllers/ptuMissileRack');

const router = express.Router();

router.post('/', ptuMissileRackController.createPtuMissileRack);
router.get('/', ptuMissileRackController.getPtuMissileRacks);
router.post('/delete', ptuMissileRackController.deletePtuMissileRacks);

module.exports = router;
