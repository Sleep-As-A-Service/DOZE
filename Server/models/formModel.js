const mongooseInstance = require('./mongoUtil.js');

const formSchema = mongooseInstance.Schema(
  {
    userId: { type: mongooseInstance.Types.ObjectId, ref: 'user' },
    answers: { type: Array, required: true },
    totalScore: { type: Number, required: true, default: 0 },
    journalId: { type: mongooseInstance.Types.ObjectId, ref: 'journal' },
  },
  { timestamps: true }
);

const FormModel = mongooseInstance.model('form', formSchema);

module.exports = FormModel;
