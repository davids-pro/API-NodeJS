const PtuMissile = require('../models/PtuMissile');

exports.createPtuMissile = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuMissile = new PtuMissile({
        ...req.body[1]
      });
      ptuMissile
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

exports.getPtuMissiles = (req, res) => {
  PtuMissile.find()
    .then((ptuMissiles) => {
      res.status(200).json(ptuMissiles);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuMissiles = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuMissile.deleteMany()
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
