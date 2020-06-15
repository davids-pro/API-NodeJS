const Thruster = require('../models/Thruster');

exports.createThruster = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const thruster = new Thruster({
        ...req.body[1]
      });
      thruster
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

exports.getThrusters = (req, res) => {
  Thruster.find()
    .then((thrusters) => {
      res.status(200).json(thrusters);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteThrusters = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Thruster.deleteMany()
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
