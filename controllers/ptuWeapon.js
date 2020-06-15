const PtuWeapon = require('../models/PtuWeapon');

exports.createPtuWeapon = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuWeapon = new PtuWeapon({
        ...req.body[1]
      });
      ptuWeapon
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

exports.getPtuWeapons = (req, res) => {
  PtuWeapon.find()
    .then((ptuWeapons) => {
      res.status(200).json(ptuWeapons);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuWeapons = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuWeapon.deleteMany()
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
