const PtuThruster = require('../models/PtuThruster');

exports.createPtuThruster = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuThruster = new PtuThruster({
        ...req.body[1]
      });
      ptuThruster
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

exports.getPtuThrusters = (req, res) => {
  PtuThruster.find()
    .then((ptuThrusters) => {
      res.status(200).json(ptuThrusters);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuThrusters = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuThruster.deleteMany()
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
