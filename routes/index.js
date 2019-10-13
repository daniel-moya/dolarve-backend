const express = require('express');
const endpoints = require('./endpoints');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send('Dolar ve');
});

router.use('/api',endpoints);

module.exports = router