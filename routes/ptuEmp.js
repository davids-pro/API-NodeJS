const express = require('express');
const ptuEmpController = require('../controllers/ptuEmp');

const router = express.Router();

router.post('/', ptuEmpController.createPtuEmp);
router.get('/', ptuEmpController.getPtuEmps);
router.post('/delete', ptuEmpController.deletePtuEmps);

module.exports = router;
