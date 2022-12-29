const mongooseInstance = require('./mongoUtil.js');

const journalSchema = mongooseInstance.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'user' },
    formId: { type: mongoose.Types.ObjectId, ref: 'form' },
    entry: { type: String },
  },
  { timestamps: true }
);

const JournalModel = mongooseInstance.model('journal', journalSchema);

module.exports = JournalModel;
