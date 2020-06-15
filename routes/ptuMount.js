const express = require('express');
const ptuMountController = require('../controllers/ptuMount');

const router = express.Router();

router.post('/', ptuMountController.createPtuMount);
router.get('/', ptuMountController.getPtuMounts);
router.post('/delete', ptuMountController.deletePtuMounts);

module.exports = router;
