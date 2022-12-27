const mongoose = require('mongoose');

// connect to mongoDB
const MONGO_URI = process.env.MONGO_URI;
const mongooseInstance = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Sleep-Quality-App',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

module.exports = mongooseInstance;
