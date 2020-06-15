const PtuQed = require('../models/PtuQed');

exports.createPtuQed = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuQed = new PtuQed({
        ...req.body[1]
      });
      ptuQed
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

exports.getPtuQeds = (req, res) => {
  PtuQed.find()
    .then((ptuQeds) => {
      res.status(200).json(ptuQeds);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuQeds = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuQed.deleteMany()
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
