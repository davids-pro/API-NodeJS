const express = require('express');
const thrusterController = require('../controllers/thruster');

const router = express.Router();

router.post('/', thrusterController.createThruster);
router.get('/', thrusterController.getThrusters);
router.post('/delete', thrusterController.deleteThrusters);

module.exports = router;
