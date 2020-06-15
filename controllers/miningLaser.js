const MiningLaser = require('../models/MiningLaser');

exports.createMiningLaser = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const miningLaser = new MiningLaser({
        ...req.body[1]
      });
      miningLaser
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

exports.getMiningLasers = (req, res) => {
  MiningLaser.find()
    .then((miningLasers) => {
      res.status(200).json(miningLasers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteMiningLasers = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      MiningLaser.deleteMany()
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
