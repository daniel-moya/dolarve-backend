const express = require('express');
const config = require('config');

const request = require('request');
const cheerio = require('cheerio');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send('Dolar ve API');
 });

router.get('/exchange/:name', async (req, res) => {
  
  if(req.params.name.toLocaleLowerCase() === config.exchanges.dolar_today.endpoint) {
    const url = config.exchanges.dolar_today.url;
    
    request(url, (err, response, html) => {
      if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html);
    
        const data = ($('p.ProfileHeaderCard-bio ')).text().split(' ');
        res.status(200).send(data[data.indexOf('Bs.') + 1]);
      }
    });
  }
});

module.exports = router