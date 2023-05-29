const sql = require("./db.js");

// constructor
const Option = function (option) {
  this.id = option.id;
};

Option.getByServiceId = (id, result) => {
  let query = "select a.idoptiontypes ,b.idoption, a.optionname, b.opt, d.idservice_type, d.name, b.rating, b.rating_number from option_types a, options b, services c, service_types d where a.idoptiontypes = b.idot and a.idserv = c.idservices and c.idst = d.idservice_type";

  if (id) {
    query += ` and c.idservices = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Option.addOption = ([idot, opt], result) => {
  let query = `insert into options(idot, opt) values(${idot},"${opt}")`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Option.deleteOption = (ido, result) => {
  let query = `delete from options where idoption = ${ido}`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Option.getOptionRating = (id, result) => {
  let query = `select rating from options where idoption = '${id}'`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Option.updateOptionRating = ([rating, id], result) => {
  let query = `update options set rating = '${rating}' where idoption = '${id}'`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Option.updateOptionRatingNumber = (id, result) => {
  let query = `update options set rating_number = rating_number + 1 where idoption = '${id}'`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};


module.exports = Option;
