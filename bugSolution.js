const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //middleware to parse json
app.use(express.urlencoded({ extended: true})); //middleware to parse url encoded

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});