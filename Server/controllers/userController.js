const User = require('../models/userModel.js');

const userController = {};

/**
 * Middleware to show all users in database.
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

module.exports = userController;
