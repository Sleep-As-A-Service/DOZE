const Form = require('../models/formModel.js');

const formController = {};

/**
 * Middleware to save the form responses into the database.
 *  TODO: link journal entries
 */
formController.saveFormResponse = (req, res, next) => {
  const { user, answers, totalScore } = req.body;

  Form.create({ userId: user, answers: answers, totalScore: totalScore })
    .then((formDoc) => {
      res.locals.savedFormResponses = formDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.saveFormResponse ${error}`,
        message: {
          err: `Encountered an error in userController.saveFormResponse`,
        },
      });
    });
};

/**
 * Middleware to read all the form responses for a particular user from the database.
 */
formController.getUserFormsResponses = (req, res, next) => {
  const { user } = req.query;

  Form.find({ userId: user })
    .then((formsDoc) => {
      res.locals.allUserForms = formsDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.getUserFormsResponses ${error}`,
        message: {
          err: `Encountered an error in userController.getUserFormsResponses`,
        },
      });
    });
};

/**
 * Middleware to read a particular form from the database.
 */
formController.getSingleForm = (req, res, next) => {
  const { formId } = req.params;

  Form.find({ _id: formId })
    .then((formDoc) => {
      res.locals.foundForm = formDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.getSingleForm ${error}`,
        message: {
          err: `Encountered an error in userController.getSingleForm`,
        },
      });
    });
};

module.exports = formController;
