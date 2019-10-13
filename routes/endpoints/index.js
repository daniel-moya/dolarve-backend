const express = require('express');

const router = express.Router();

router.get('/exchange/:name', async (req, res) => {
  res.status(200).send(`exchange ${req.params.name}`);
});

module.exports = router