var express = require("express");
var donut = require("../models/donut.js")
var router = express.Router();




// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    donut.selectAll(function(data) {
      var hbsObject = {
        donuts: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/donuts", function(req, res) {
    donut.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
      
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/donuts/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    donut.update(
      {
        devour: req.body.devour
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  