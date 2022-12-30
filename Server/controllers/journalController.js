const Journal = require('../models/journalModel.js');

const journalController = {};

/**
 * Middleware to save the journal entry into the database.
 *  
 *  TODO: link journal entries
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

module.exports = journalController;