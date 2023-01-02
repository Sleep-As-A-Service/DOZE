const User = require('../models/userModel.js');

const userController = {};

/**
 * Middleware to show all users in database.
 *  TODO: remove once of of dev phase
 */
userController.getAllUsers = (req, res, next) => {
  User.find()
    .then((usersDoc) => {
      res.locals.users = usersDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.getAllUsers ${error}`,
        message: { err: `Encountered an error in userController.getAllUsers` },
      });
    });
};

/**
 * Middleware to add a user to database.
 * TODO: re-write once ID auto-increment is added for the User model
 */
userController.addUser = (req, res, next) => {
  const { username } = req.body;
  User.create({ username: username })
    .then((userDoc) => {
      res.locals.newUser = userDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.addUser ${error}`,
        message: { err: `Encountered an error in userController.addUser` },
      });
    });
};

module.exports = userController;
