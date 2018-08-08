var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.emit("createMessage", { from: 'najam', text: "hi there" });

socket.on("createMessage",(data)=>{
    console.log(data);
});



socket.on('email', () => {
    console.log('we recive email from Server');
});

socket.on('disconnect', () => {
    console.log('Disconected from Server');
});