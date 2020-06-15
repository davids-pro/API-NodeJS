const express = require('express');
const loadoutController = require('../controllers/loadout');

const router = express.Router();

router.post('/', loadoutController.createLoadout);
router.get('/:shortened', loadoutController.getLoadoutByShortened);

module.exports = router;
