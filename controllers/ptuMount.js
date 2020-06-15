const PtuMount = require('../models/PtuMount');

exports.createPtuMount = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuMount = new PtuMount({
        ...req.body[1]
      });
      ptuMount
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

exports.getPtuMounts = (req, res) => {
  PtuMount.find()
    .then((ptuMounts) => {
      res.status(200).json(ptuMounts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuMounts = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuMount.deleteMany()
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
