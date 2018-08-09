var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});



socket.on('newUser', (data) => {
    console.log(data.User);
});
// socket.on('newUser', () => {
//     console.log('wellcome najam');
// });




function callme() {

    return (socket.emit("createMessage", { from: 'najam', text: "hi there", to: 'najam' }));
}
socket.on("createMessage", (data) => {
    console.log(data);
});
function active() {
    socket.on("textnajam", (data) => {
        console.log(data);
    });
}
function deActive() {
    socket.off("textnajam");
}


socket.on('email', () => {
    console.log('we recive email from Server');
});

socket.on('disconnect', () => {
    console.log('Disconected from Server');
});