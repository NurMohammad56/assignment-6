const express = require('express');
const app = new express;
const router = require('./src/routes/api');

app.use('/api', router);


module.exports=app;