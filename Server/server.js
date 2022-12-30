const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routers
const usersRouter = require('./routes/users.js');
const formsRouter = require('./routes/forms.js');
const journalRouter = require('./routes/journals.js');

// set routes
app.use('/users', usersRouter);
app.use('/forms', formsRouter);
app.use('/journals', journalRouter);

app.get('/', (req, res) => {
  return res.send('This is a test!');
});

// TODO: 404 handler

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start the server
app.listen(PORT, (req, res) => {
  console.log('Listening on PORT ' + PORT);
});
