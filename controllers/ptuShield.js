const PtuShield = require('../models/PtuShield');

exports.createPtuShield = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuShield = new PtuShield({
        ...req.body[1]
      });
      ptuShield
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

exports.getPtuShields = (req, res) => {
  PtuShield.find()
    .then((ptuShields) => {
      res.status(200).json(ptuShields);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuShields = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuShield.deleteMany()
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
