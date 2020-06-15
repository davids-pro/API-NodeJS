const express = require('express');
const informationController = require('../controllers/information');

const router = express.Router();

router.post('/', informationController.createInformation);
router.get('/', informationController.getInformation);
router.put('/:id', informationController.updateInformation);

module.exports = router;
