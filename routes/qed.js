const express = require('express');
const qedController = require('../controllers/qed');

const router = express.Router();

router.post('/', qedController.createQed);
router.get('/', qedController.getQeds);
router.post('/delete', qedController.deleteQeds);

module.exports = router;
