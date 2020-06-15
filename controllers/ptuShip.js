const Ship = require('../models/PtuShip');
const PtuShip = require('../models/PtuShip');

exports.createPtuShip = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuShip = new PtuShip({
        ...req.body[1]
      });
      ptuShip
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

exports.getPtuShips = (req, res) => {
  PtuShip.find()
    .then((ptuShips) => {
      res.status(200).json(ptuShips);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuShips = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuShip.deleteMany()
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
