const Information = require('../models/Information');

exports.createInformation = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      const information = new Information({
        ...req.body[1]
      });
      information
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

exports.getInformation = (req, res) => {
  Information.find()
    .then((information) => {
      res.status(200).json(information);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.updateInformation = (req, res) => {
  if (req.body[0] !== undefined) {
    if (req.body[0].password === '<MDP>') {
      Information.findByIdAndUpdate(req.params.id, { ...req.body[1] })
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
