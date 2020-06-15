const express = require('express');
const ptuThrusterController = require('../controllers/ptuThruster');

const router = express.Router();

router.post('/', ptuThrusterController.createPtuThruster);
router.get('/', ptuThrusterController.getPtuThrusters);
router.post('/delete', ptuThrusterController.deletePtuThrusters);

module.exports = router;
