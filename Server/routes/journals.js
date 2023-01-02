const express = require('express');
const router = express.Router();

const journalController = require('../controllers/journalController');


// POST http://localhost:3000/journals
router.post('/', journalController.saveJournal, (req, res) => {
    return res.status(200).json(res.locals.savedJournal);
});


























module.exports = router;