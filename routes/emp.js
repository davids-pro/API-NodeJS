const express = require('express');
const empController = require('../controllers/emp');

const router = express.Router();

router.post('/', empController.createEmp);
router.get('/', empController.getEmps);
router.post('/delete', empController.deleteEmps);

module.exports = router;
