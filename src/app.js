var express = require('express');
var app = express();

app.use(express.static(__dirname +'./../../index.html')); //serves the index.html
app.listen(3000);

app.get('/',function (req,res) {
    res.render('index')
})
