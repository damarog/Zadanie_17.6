var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

//poniższe nie działa
//app.use(express.static('assets'));


//rozwiązanie z internetu
app.use('/assets', express.static("assets"));

app.get('/', function (req, res) {
    res.render('login');
});


app.get('/auth/google', (req, res) => {
    res.render('google');
});

app.get('/first-view', function (req, res){
    res.render('first-view');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});