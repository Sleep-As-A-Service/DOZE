const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('This is a test!');
});

app.listen(PORT, (req, res) => {
  console.log('Listening on PORT ' + PORT);
});
