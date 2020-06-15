const Missile = require('../models/Missile');

exports.createMissile = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const missile = new Missile({
        ...req.body[1]
      });
      missile
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

exports.getMissiles = (req, res) => {
  Missile.find()
    .then((missiles) => {
      res.status(200).json(missiles);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteMissiles = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Missile.deleteMany()
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
