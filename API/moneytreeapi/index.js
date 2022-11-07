const express = require('express');
const bodyParser = require('body-parser');
const knexConfig = require('./database/knexfile');
const knex = require('knex')(knexConfig['development'])


const app = express();
const port = 3000;



app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('MoneyTree!!!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});