const Option = require("../models/option.model");

exports.findByServiceId = (req, res) => {
  const id = req.query.idservices;

  Option.getByServiceId(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};

exports.add = (req, res) => {
  const idot = req.body.idot;
  const opt = req.body.opt;

  Option.addOption([idot, opt], (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  const ido = req.body.ido;

  Option.deleteOption(ido, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};

exports.getRating = (req, res) => {
  const id = req.query.id;

  Option.getOptionRating(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};

exports.updateRating = (req, res) => {
  const rating = req.body.rating;
  const id = req.body.id;

  Option.updateOptionRating([rating, id], (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};

exports.updateRatingNumber = (req, res) => {
  const id = req.body.id;

  Option.updateOptionRatingNumber(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};