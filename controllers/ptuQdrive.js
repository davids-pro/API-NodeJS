const PtuQdrive = require('../models/PtuQdrive');

exports.createPtuQdrive = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuQdrive = new PtuQdrive({
        ...req.body[1]
      });
      ptuQdrive
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

exports.getPtuQdrives = (req, res) => {
  PtuQdrive.find()
    .then((ptuQdrives) => {
      res.status(200).json(ptuQdrives);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuQdrives = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuQdrive.deleteMany()
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
