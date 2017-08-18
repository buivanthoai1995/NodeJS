const express = require('express');
 const router = express.Router()
var app = express();
app.use('/', require('./user'))
app.get('/', function(req, res) {
    res.render('index',{ title: 'Home Page' })
	
})
module.exports = app