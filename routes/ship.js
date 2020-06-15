const express = require('express');
const shipController = require('../controllers/ship');

const router = express.Router();

router.post('/', shipController.createShip);
router.get('/', shipController.getShips);
router.post('/delete', shipController.deleteShips);

module.exports = router;
