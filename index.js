const express = require('express');
const app = express()
const port = 5000
const cors = require('cors');

app.use(cors());

const api = require('./courses.json');
const category = require('./category.json');

app.get('/', (req, res) => {
  res.send(api)
})

app.get('/category', (req, res) => {
  res.send(category)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})