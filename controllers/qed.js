const Qed = require('../models/Qed');

exports.createQed = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const qed = new Qed({
        ...req.body[1]
      });
      qed
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

exports.getQeds = (req, res) => {
  Qed.find()
    .then((qeds) => {
      res.status(200).json(qeds);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteQeds = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Qed.deleteMany()
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
