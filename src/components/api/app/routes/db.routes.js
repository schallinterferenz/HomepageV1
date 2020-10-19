module.exports = app => {
  const api = require("../controller/api.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/user", api.createNewUser);

  // Create a new News
  router.post("/news", api.createNewNews);

  // Retrieve all Tutorials
  router.get("/allNews", api.findAllNews);

  // Retrieve all Tutorials
  router.get("/allUsers", api.findAllUsers);

  // Retrieve a single User with id
  router.get("/:id", api.findOne);

  // Update a User with id
  router.put("/:id", api.update);

  // Delete a User with id
  router.delete("/del/:id", api.delete);

  // Create a new Tutorial
 router.delete("/delall", api.deleteAll);

  app.use('/api/db', router);
};