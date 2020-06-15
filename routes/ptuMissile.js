const express = require('express');
const ptuMissileController = require('../controllers/ptuMissile');

const router = express.Router();

router.post('/', ptuMissileController.createPtuMissile);
router.get('/', ptuMissileController.getPtuMissiles);
router.post('/delete', ptuMissileController.deletePtuMissiles);

module.exports = router;
