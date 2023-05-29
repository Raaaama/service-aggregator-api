module.exports = app => {
    const Service = require("../controllers/service.controller.js");
  
    var router = require("express").Router();

    router.get("/getone/", Service.findByIdservice);

    router.get("/", Service.findByIdp);

    router.put("/", Service.update);

    router.post("/", Service.add);

    router.post("/delete/", Service.delete);

    router.get("/rating/", Service.getRating);

    router.put("/rating/", Service.updateRating);
  
    app.use('/api/service', router);
  };
  