const mongooseInstance = require('./mongoUtil.js');

const journalSchema = mongooseInstance.Schema(
  {
    userId: { type: mongooseInstance.Types.ObjectId, ref: 'user' },
    formId: { type: mongooseInstance.Types.ObjectId, ref: 'form' },
    entry: { type: String },
  },
  { timestamps: true }
);

const JournalModel = mongooseInstance.model('journal', journalSchema);

module.exports = JournalModel;
