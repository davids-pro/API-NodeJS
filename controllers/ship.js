const Ship = require('../models/Ship');

exports.createShip = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ship = new Ship({
        ...req.body[1]
      });
      ship
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

exports.getShips = (req, res) => {
  Ship.find()
    .then((ships) => {
      res.status(200).json(ships);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteShips = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Ship.deleteMany()
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
