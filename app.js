const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

mongoose
  .connect('mongodb+srv://erkul:<MDP>@calculator-qvphp.gcp.mongodb.net/DPSCalculator?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(__dirname + '/assets'));

//routes
const informationRoutes = require('./routes/information');
const loadoutRoutes = require('./routes/loadout');
const coolerRoutes = require('./routes/cooler');
const empRoutes = require('./routes/emp');
const miningLaserRoutes = require('./routes/miningLaser');
const missileRoutes = require('./routes/missile');
const missileRackRoutes = require('./routes/missileRack');
const mountRoutes = require('./routes/mount');
const powerPlantRoutes = require('./routes/powerPlant');
const qdriveRoutes = require('./routes/qdrive');
const qedRoutes = require('./routes/qed');
const shieldRoutes = require('./routes/shield');
const shipRoutes = require('./routes/ship');
const shopRoutes = require('./routes/shop');
const thrusterRoutes = require('./routes/thruster');
const turretRoutes = require('./routes/turret');
const weaponRoute = require('./routes/weapon');
const ptuCoolerRoutes = require('./routes/ptuCooler');
const ptuEmpRoutes = require('./routes/ptuEmp');
const ptuMiningLaserRoutes = require('./routes/ptuMiningLaser');
const ptuMissileRoutes = require('./routes/ptuMissile');
const ptuMissileRackRoutes = require('./routes/ptuMissileRack');
const ptuMountRoutes = require('./routes/ptuMount');
const ptuPowerPlantRoutes = require('./routes/ptuPowerPlant');
const ptuQdriveRoutes = require('./routes/ptuQdrive');
const ptuQedRoutes = require('./routes/ptuQed');
const ptuShieldRoutes = require('./routes/ptuShield');
const ptuShipRoutes = require('./routes/ptuShip');
const ptuShopRoutes = require('./routes/ptuShop');
const ptuThrusterRoutes = require('./routes/ptuThruster');
const ptuTurretRoutes = require('./routes/ptuTurret');
const ptuWeaponRoute = require('./routes/ptuWeapon');

// #DPSCalculator global
app.use('/informations', informationRoutes);
app.use('/loadouts', loadoutRoutes);

// #DPSCalculation LIVE
app.use('/coolers', coolerRoutes);
app.use('/emps', empRoutes);
app.use('/mining-lasers', miningLaserRoutes);
app.use('/missiles', missileRoutes);
app.use('/missile-racks', missileRackRoutes);
app.use('/mounts', mountRoutes);
app.use('/power-plants', powerPlantRoutes);
app.use('/qdrives', qdriveRoutes);
app.use('/qeds', qedRoutes);
app.use('/shields', shieldRoutes);
app.use('/ships', shipRoutes);
app.use('/shops', shopRoutes);
app.use('/thrusters', thrusterRoutes);
app.use('/turrets', turretRoutes);
app.use('/weapons', weaponRoute);

// #DPSCalculation PTU
app.use('/ptu-coolers', ptuCoolerRoutes);
app.use('/ptu-emps', ptuEmpRoutes);
app.use('/ptu-mining-lasers', ptuMiningLaserRoutes);
app.use('/ptu-missiles', ptuMissileRoutes);
app.use('/ptu-missile-racks', ptuMissileRackRoutes);
app.use('/ptu-mounts', ptuMountRoutes);
app.use('/ptu-power-plants', ptuPowerPlantRoutes);
app.use('/ptu-qdrives', ptuQdriveRoutes);
app.use('/ptu-qeds', ptuQedRoutes);
app.use('/ptu-shields', ptuShieldRoutes);
app.use('/ptu-ships', ptuShipRoutes);
app.use('/ptu-shops', ptuShopRoutes);
app.use('/ptu-thrusters', ptuThrusterRoutes);
app.use('/ptu-turrets', ptuTurretRoutes);
app.use('/ptu-weapons', ptuWeaponRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = app;
