const Cooler = require('../models/Cooler');

exports.createCooler = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const cooler = new Cooler({
        ...req.body[1]
      });
      cooler
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

exports.getCoolers = (req, res) => {
  Cooler.find()
    .then((coolers) => {
      res.status(200).json(coolers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteCoolers = (req, res) => {
  console.log(req.body);
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Cooler.deleteMany()
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
