const express = require('express');
const handlebars = require('express-handlebars');
const port = process.env.PORT || 5000;

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port);