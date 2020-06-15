const express = require('express');
const ptuQdriveController = require('../controllers/ptuQdrive');

const router = express.Router();

router.post('/', ptuQdriveController.createPtuQdrive);
router.get('/', ptuQdriveController.getPtuQdrives);
router.post('/delete', ptuQdriveController.deletePtuQdrives);

module.exports = router;
