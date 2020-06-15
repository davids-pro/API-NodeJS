const Turret = require('../models/Turret');

exports.createTurret = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const turret = new Turret({
        ...req.body[1]
      });
      turret
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

exports.getTurrets = (req, res) => {
  Turret.find()
    .then((turrets) => {
      res.status(200).json(turrets);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteTurrets = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Turret.deleteMany()
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
