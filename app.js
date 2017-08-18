var express = require('express'),
  bodyParser = require('body-parser'),
  router = express.Router(),
   mongoose = require('mongoose');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))
app.use(require('./Controllers'))
mongoose.connect('mongodb://localhost:27017/Users', function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    var db = mongoose.connection;
    app.listen(3000, function () {
      console.log('Listening on port 3000...')
    })
  }
})