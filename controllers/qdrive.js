const Qdrive = require('../models/Qdrive');

exports.createQdrive = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const qdrive = new Qdrive({
        ...req.body[1]
      });
      qdrive
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

exports.getQdrives = (req, res) => {
  Qdrive.find()
    .then((qdrives) => {
      res.status(200).json(qdrives);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteQdrives = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Qdrive.deleteMany()
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
