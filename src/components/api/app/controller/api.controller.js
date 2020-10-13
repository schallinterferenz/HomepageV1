const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.createNewUser = (req, res) => {
  if(!req.body.user) {
      res.status(400).send({message: "You must distribute a Username."});
      return;
  };

  if(!req.body.passwordHashed) {
      res.status(400).send({message: "No Password set."});
      return;
  };

  const user = new User({
    id: req.body.id,
    username: req.body.username,
    passwordHashed: req.body.passwordHashed
  });

  user
    .save(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the USER."
        });
    });
};

exports.createNewNews = (req,res) => {

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};