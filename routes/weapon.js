const express = require('express');
const weaponController = require('../controllers/weapon');

const router = express.Router();

router.post('/', weaponController.createWeapon);
router.get('/', weaponController.getWeapons);
router.post('/delete', weaponController.deleteWeapons);

module.exports = router;
