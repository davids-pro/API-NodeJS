const express = require('express');
const ptuShieldController = require('../controllers/ptuShield');

const router = express.Router();

router.post('/', ptuShieldController.createPtuShield);
router.get('/', ptuShieldController.getPtuShields);
router.post('/delete', ptuShieldController.deletePtuShields);

module.exports = router;
