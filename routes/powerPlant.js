const express = require('express');
const powerPlantController = require('../controllers/powerPlant');

const router = express.Router();

router.post('/', powerPlantController.createPowerPlant);
router.get('/', powerPlantController.getPowerPlants);
router.post('/delete', powerPlantController.deletePowerPlants);

module.exports = router;
