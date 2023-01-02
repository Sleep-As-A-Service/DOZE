const Journal = require('../models/journalModel.js');

const journalController = {};

/**
 * Middleware to save the journal entry into the database.
 *  
*/
journalController.saveJournal = (req, res, next) => {
    const { user, entry } = req.body;
    
    Journal.create({ userId: user, entry: entry })
        .then((journalDoc) => {
        res.locals.savedJournal = journalDoc;
        return next();
        })
        .catch((error) => {
        return next({
            log: `ERROR in journalController.saveJournal ${error}`,
            message: {
            err: `Encountered an error in journalController.saveJournal`,
            },
        });
        });
    }

/**
 * Middleware to get all the journal entries for a particular user from the database.
 *  
*/
journalController.getAllUserJournals = (req, res, next) => {
    const { user } = req.query;
    
    Journal.find({ userId: user})
        .then((journalsDoc) => {
        res.locals.allJournals = journalsDoc;
        return next();
        })
        .catch((error) => {
        return next({
            log: `ERROR in journalController.getAllUserJournals ${error}`,
            message: {
            err: `Encountered an error in journalController.getAllUserJournals`,
            },
        });
        });
    }

/**
 * Middleware to update the journal entry.
 *  
*/
journalController.updateJournalEntry = (req, res, next) => {
    const { journalId } = req.query;
    const { newEntry } = req.body;
    
    Journal.findOneAndUpdate({ journalId: journalId}, {entry: newEntry}, {
        new: true
      })
        .then((journalDoc) => {
        res.locals.updatedEntry = journalDoc;
        return next();
        })
        .catch((error) => {
        return next({
            log: `ERROR in journalController.updateJournalEntry ${error}`,
            message: {
            err: `Encountered an error in journalController.updateJournalEntry`,
            },
        });
        });
    }

/**
 * Middleware to delete the journal from database.
 *  
*/
journalController.deleteJournal = (req, res, next) => {
    const { journalId } = req.params;
    
    Journal.findOneAndDelete({ journalId: journalId})
        .then((journalDoc) => {
        res.locals.deletedJournal = journalDoc;
        return next();
        })
        .catch((error) => {
        return next({
            log: `ERROR in journalController.deleteJournal ${error}`,
            message: {
            err: `Encountered an error in journalController.deleteJournal`,
            },
        });
        });
    }

module.exports = journalController;