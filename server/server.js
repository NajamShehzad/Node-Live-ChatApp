const path = require('path');
var express = require('express');

var publicPath = path.join(__dirname,'../public')
var app = express();
console.log(publicPath);


app.use(express.static(publicPath));

app.get('/',(req,res) => {
    res.render('index.html');
});


app.listen(8000,()=>{
    console.log('App Running on Port 8000  ');
})


console.log(publicPath);