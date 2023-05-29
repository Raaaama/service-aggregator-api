module.exports = app => {
    const Option = require("../controllers/option.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", Option.findByServiceId);

    router.get("/rating/", Option.getRating);

    router.post("/", Option.add);

    router.post("/delete/", Option.delete);

    router.put("/rating/", Option.updateRating);

    router.put("/ratingNumber/", Option.updateRatingNumber);
  
    app.use('/api/option', router);
  };
  