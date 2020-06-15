const express = require('express');
const ptuTurretController = require('../controllers/ptuTurret');

const router = express.Router();

router.post('/', ptuTurretController.createPtuTurret);
router.get('/', ptuTurretController.getPtuTurrets);
router.post('/delete', ptuTurretController.deletePtuTurrets);

module.exports = router;
