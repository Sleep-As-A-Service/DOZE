const mongooseInstance = require('./mongoUtil.js');

const formSchema = mongooseInstance.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'user' },
    question: { type: String, required: true },
    answers: { type: Array, required: true },
    totalScore: { type: Number, required: true, default: 0 },
    journalId: { type: mongoose.Types.ObjectId, ref: 'journal' },
  },
  { timestamps: true }
);

const FormModel = mongooseInstance.model('form', formSchema);

module.exports = FormModel;
