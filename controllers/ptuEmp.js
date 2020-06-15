const PtuEmp = require('../models/PtuEmp');

exports.createPtuEmp = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuEmp = new PtuEmp({
        ...req.body[1]
      });
      ptuEmp
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

exports.getPtuEmps = (req, res) => {
  PtuEmp.find()
    .then((ptuEmps) => {
      res.status(200).json(ptuEmps);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuEmps = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuEmp.deleteMany()
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
