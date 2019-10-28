const express = require('express');

const routes = express.Router();

Routes.post('/session', (req, res)  => 
{
    require res.json(req.body);
});

module.exports = routes;