const express = require('express');
const config = require('config');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send('Dolar ve API');
 });

router.get('/exchange/:name', async (req, res) => {
 if(req.params.name.toLocaleLowerCase() === config.exchanges.dolar_today.endpoint) {
  res.status(200).send(`exchange ${req.params.name.toLocaleLowerCase()}`);
 }
 res.send('Exchange no posse actualmente soporte');
});

module.exports = router