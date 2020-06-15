const PtuCooler = require('../models/PtuCooler');

exports.createPtuCooler = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuCooler = new PtuCooler({
        ...req.body[1]
      });
      ptuCooler
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

exports.getPtuCoolers = (req, res) => {
  PtuCooler.find()
    .then((ptuCoolers) => {
      res.status(200).json(ptuCoolers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuCoolers = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuCooler.deleteMany()
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
