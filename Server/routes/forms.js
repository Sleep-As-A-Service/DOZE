const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

// POST http://localhost:3000/forms
router.post('/', formController.saveFormResponse, (req, res) => {
  return res.status(200).json(res.locals.savedFormResponses);
});

// GET http://localhost:3000/forms/?user=userID
router.get('/', formController.getUserFormsResponses, (req, res) => {
  return res.status(200).json(res.locals.allUserForms);
});

// GET http://localhost:3000/forms/:formID
router.get('/:formId', formController.getSingleForm, (req, res) => {
  return res.status(200).json(res.locals.foundForm);
});

module.exports = router;
