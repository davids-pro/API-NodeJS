const Emp = require('../models/Emp');

exports.createEmp = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const emp = new Emp({
        ...req.body[1]
      });
      emp
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

exports.getEmps = (req, res) => {
  Emp.find()
    .then((emps) => {
      res.status(200).json(emps);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteEmps = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Emp.deleteMany()
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
