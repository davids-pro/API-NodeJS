const PtuMiningLaser = require('../models/PtuMiningLaser');

exports.createPtuMiningLaser = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuMiningLaser = new PtuMiningLaser({
        ...req.body[1]
      });
      ptuMiningLaser
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

exports.getPtuMiningLasers = (req, res) => {
  PtuMiningLaser.find()
    .then((ptuMiningLasers) => {
      res.status(200).json(ptuMiningLasers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuMiningLasers = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuMiningLaser.deleteMany()
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
