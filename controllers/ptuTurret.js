const PtuTurret = require('../models/PtuTurret');

exports.createPtuTurret = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuTurret = new PtuTurret({
        ...req.body[1]
      });
      ptuTurret
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

exports.getPtuTurrets = (req, res) => {
  PtuTurret.find()
    .then((ptuTurrets) => {
      res.status(200).json(ptuTurrets);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuTurrets = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuTurret.deleteMany()
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
