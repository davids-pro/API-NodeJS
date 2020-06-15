const express = require('express');
const mountController = require('../controllers/mount');

const router = express.Router();

router.post('/', mountController.createMount);
router.get('/', mountController.getMounts);
router.post('/delete', mountController.deleteMounts);

module.exports = router;
