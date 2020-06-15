const PtuPowerPlant = require('../models/PtuPowerPlant');

exports.createPtuPowerPlant = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuPowerPlant = new PtuPowerPlant({
        ...req.body[1]
      });
      ptuPowerPlant
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

exports.getPtuPowerPlants = (req, res) => {
  PtuPowerPlant.find()
    .then((ptuPowerPlants) => {
      res.status(200).json(ptuPowerPlants);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuPowerPlants = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuPowerPlant.deleteMany()
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
