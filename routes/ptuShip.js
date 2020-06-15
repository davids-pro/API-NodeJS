const express = require('express');
const ptuShipController = require('../controllers/ptuShip');

const router = express.Router();

router.post('/', ptuShipController.createPtuShip);
router.get('/', ptuShipController.getPtuShips);
router.post('/delete', ptuShipController.deletePtuShips);

module.exports = router;
