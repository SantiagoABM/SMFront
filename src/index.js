
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('views'));


app.get('/', function(req, res) {

    res.render('index');
});

app.get('/about', function(req, res) {

    res.render('about');
});

app.listen(2000);
console.log('2000 is the magic port');