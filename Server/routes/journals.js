const express = require('express');
const router = express.Router();

const journalController = require('../controllers/journalController');


// POST http://localhost:3000/journals
router.post('/', journalController.saveJournal, (req, res) => {
    return res.status(200).json(res.locals.savedJournal);
});

// GET http://localhost:3000/journals/?user=userID
router.get('/', journalController.getAllUserJournals, (req, res) => {
    return res.status(200).json(res.locals.allJournals);
});

// UPDATE http://localhost:3000/journals/:journalID
router.patch('/:journalId', journalController.updateJournalEntry, (req, res) => {
    return res.status(200).json(res.locals.updatedEntry);
});


// DELETE http://localhost:3000/journals/:journalID
router.delete('/:journalId', journalController.deleteJournal, (req, res) => {
    return res.status(200).json(res.locals.deletedJournal);
});



















module.exports = router;