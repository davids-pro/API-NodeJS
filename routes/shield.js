const express = require('express');
const shieldController = require('../controllers/shield');

const router = express.Router();

router.post('/', shieldController.createShield);
router.get('/', shieldController.getShields);
router.post('/delete', shieldController.deleteShields);

module.exports = router;
