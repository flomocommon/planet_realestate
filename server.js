const express = require('express');
const bodyParser = require('body-parser');
// const api = require('./routes/api')

const app = express();
const port = process.env.PORT || 8080;

const planets = require('./fixtures/planets')

app 
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/planets', (req, res) => {
  res.send({ planets: planets });
});

app.use(express.static('dist'))

app.listen(port, () => console.log(`Listening on port ${port}`));