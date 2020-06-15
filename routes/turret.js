const express = require('express');
const turretController = require('../controllers/turret');

const router = express.Router();

router.post('/', turretController.createTurret);
router.get('/', turretController.getTurrets);
router.post('/delete', turretController.deleteTurrets);

module.exports = router;
