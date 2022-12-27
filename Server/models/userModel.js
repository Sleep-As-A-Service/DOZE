//const mongoose = require('mongoose');
const mongoUtil = require('./mongoUtil.js');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
