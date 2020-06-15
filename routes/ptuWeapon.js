const express = require('express');
const ptuWeaponController = require('../controllers/ptuWeapon');

const router = express.Router();

router.post('/', ptuWeaponController.createPtuWeapon);
router.get('/', ptuWeaponController.getPtuWeapons);
router.post('/delete', ptuWeaponController.deletePtuWeapons);

module.exports = router;
