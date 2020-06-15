const Weapon = require('../models/Weapon');

exports.createWeapon = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const weapon = new Weapon({
        ...req.body[1]
      });
      weapon
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

exports.getWeapons = (req, res) => {
  Weapon.find()
    .then((weapons) => {
      res.status(200).json(weapons);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteWeapons = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Weapon.deleteMany()
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
