const Shield = require('../models/Shield');

exports.createShield = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const shield = new Shield({
        ...req.body[1]
      });
      shield
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

exports.getShields = (req, res) => {
  Shield.find()
    .then((shields) => {
      res.status(200).json(shields);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteShields = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Shield.deleteMany()
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
