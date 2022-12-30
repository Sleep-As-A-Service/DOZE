const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET http://localhost:3000/users
// TODO: remove once of of dev phase; should not be publicly accessible
router.get('/', userController.getAllUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

// POST http://localhost:3000/users
router.post('/', userController.addUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

module.exports = router;
