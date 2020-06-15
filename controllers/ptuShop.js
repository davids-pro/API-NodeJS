const PtuShop = require('../models/PtuShop');

exports.createPtuShop = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const ptuShop = new PtuShop({
        ...req.body[1]
      });
      ptuShop
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

exports.getPtuShops = (req, res) => {
  PtuShop.find()
    .then((ptuShops) => {
      res.status(200).json(ptuShops);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deletePtuShops = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      PtuShop.deleteMany()
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
