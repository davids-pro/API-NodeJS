const express = require('express');
const ptuPowerPlantController = require('../controllers/ptuPowerPlant');

const router = express.Router();

router.post('/', ptuPowerPlantController.createPtuPowerPlant);
router.get('/', ptuPowerPlantController.getPtuPowerPlants);
router.post('/delete', ptuPowerPlantController.deletePtuPowerPlants);

module.exports = router;
