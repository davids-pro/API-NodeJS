const express = require('express');
const ptuQedController = require('../controllers/ptuQed');

const router = express.Router();

router.post('/', ptuQedController.createPtuQed);
router.get('/', ptuQedController.getPtuQeds);
router.post('/delete', ptuQedController.deletePtuQeds);

module.exports = router;
