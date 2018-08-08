const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
var express = require('express');

var port = process.env.PORT || 8000;
var publicPath = path.join(__dirname, '../public')
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
console.log(publicPath);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New user connected");
    socket.emit('createMessage',{name:'najam',age:21,text:"hi there"});
    socket.on('createMessage', (socket) => {
        console.log('Message Recived',socket);
    });
    socket.on('disconnect', (socket) => {
        console.log('Disconnect from client');
    });
});



app.get('/', (req, res) => {
    res.render('index.html');
});


server.listen(port, () => {
    console.log(`App Running on Port ${port}`);
})