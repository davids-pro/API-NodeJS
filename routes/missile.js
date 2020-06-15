const express = require('express');
const missileController = require('../controllers/missile');

const router = express.Router();

router.post('/', missileController.createMissile);
router.get('/', missileController.getMissiles);
router.post('/delete', missileController.deleteMissiles);

module.exports = router;
