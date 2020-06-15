const MissileRack = require('../models/MissileRack');

exports.createMissileRack = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const missileRack = new MissileRack({
        ...req.body[1]
      });
      missileRack
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

exports.getMissileRacks = (req, res) => {
  MissileRack.find()
    .then((missileRacks) => {
      res.status(200).json(missileRacks);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteMissileRacks = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      MissileRack.deleteMany()
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
