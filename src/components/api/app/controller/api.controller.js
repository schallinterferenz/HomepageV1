const { stringify } = require("querystring");
const db = require("../models");
const User = db.user;
const News = db.news;

// Create and Save a new User
exports.createNewUser = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({ message: "You must distribute a Username." });
    return;
  };

  if (!req.body.passwordHashed) {
    res.status(400).send({ message: "No Password set." });
    return;
  };

  const user = new User({
    username: req.body.username,
    passwordHashed: req.body.passwordHashed
  });

  user
    .save(user)
    .then(data => {
      res.message = "User successfully created"
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the USER."
      });
    });
};


exports.createNewNews = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "You must distribute a Title." });
    return;
  };

  if (!req.body.newstext) {
    res.status(400).send({ message: "Empty newstext." });
    return;
  };

  const news = new News({
    author: req.body.author,
    title: req.body.title,
    newstext: req.body.newstext
  });

  if(req.body.subtitle) {
    news.subtitle = req.body.subtitle
  }

  news
    .save(user)
    .then(data => {
      res.message = "User successfully created"
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the USER."
      });
    });
};

// Retrieve all News from the database.
exports.findAllNews = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  News.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

exports.findAllUsers = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  User.findByIdAndDelete({_id: id})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};

// Find all published Users
exports.findAllPublished = (req, res) => {

};