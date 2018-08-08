const path = require('path');
var express = require('express');

var port = process.env.PORT || 8000;

var publicPath = path.join(__dirname,'../public')
var app = express();
console.log(publicPath);


app.use(express.static(publicPath));

app.get('/',(req,res) => {
    res.render('index.html');
});


app.listen(port,()=>{
    console.log(`App Running on Port ${port}`);
})


console.log(publicPath);