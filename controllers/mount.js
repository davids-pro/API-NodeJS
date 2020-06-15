const Mount = require('../models/Mount');

exports.createMount = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const mount = new Mount({
        ...req.body[1]
      });
      mount
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

exports.getMounts = (req, res) => {
  Mount.find()
    .then((mounts) => {
      res.status(200).json(mounts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteMounts = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Mount.deleteMany()
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
