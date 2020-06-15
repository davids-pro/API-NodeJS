const PtuMissileRack = require('../models/PtuMissileRack');

exports.createPtuMissileRack = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuMissileRack = new PtuMissileRack({
        ...req.body[1]
      });
      ptuMissileRack
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

exports.getPtuMissileRacks = (req, res) => {
  PtuMissileRack.find()
    .then((ptuMissileRacks) => {
      res.status(200).json(ptuMissileRacks);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuMissileRacks = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuMissileRack.deleteMany()
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
