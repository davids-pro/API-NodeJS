const Information = require('../models/Loadout');
const Loadout = require('../models/Loadout');

exports.createLoadout = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '1ns3rtL0ad0ut') {
      const loadout = new Loadout({
        ...req.body[1]
      });
      loadout
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

exports.getLoadoutByShortened = (req, res) => {
  Loadout.findOne({ shortened: req.params.shortened })
    .then((loadout) => {
      res.status(200).json(loadout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
