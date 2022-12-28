const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET http://localhost:3000/users
router.get('/', userController.getAllUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

module.exports = router;
