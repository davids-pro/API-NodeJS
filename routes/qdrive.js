const express = require('express');
const qdriveController = require('../controllers/qdrive');

const router = express.Router();

router.post('/', qdriveController.createQdrive);
router.get('/', qdriveController.getQdrives);
router.post('/delete', qdriveController.deleteQdrives);

module.exports = router;
