const Shop = require('../models/Shop');

exports.createShop = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const shop = new Shop({
        ...req.body[1]
      });
      shop
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

exports.getShops = (req, res) => {
  Shop.find()
    .then((shops) => {
      res.status(200).json(shops);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteShops = (req, res) => {
  if (req.body.password !== undefined) {
    if (req.body.password === '<MDP>') {
      Shop.deleteMany()
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
