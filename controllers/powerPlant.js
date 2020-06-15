const PowerPlant = require('../models/PowerPlant');

exports.createPowerPlant = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const powerplant = new PowerPlant({
        ...req.body[1]
      });
      powerplant
        .save()
        .then(() => {
          res.status(201).json();
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    } else {
      res.status(401).json();
    }
  } else {
    res.status(401).json();
  }
};

exports.getPowerPlants = (req, res) => {
  PowerPlant.find()
    .then((powerPlants) => {
      res.status(200).json(powerPlants);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePowerPlants = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PowerPlant.deleteMany()
        .then(() => {
          res.status(200).json();
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    } else {
      res.status(401).json();
    }
  } else {
    res.status(401).json();
  }
};
