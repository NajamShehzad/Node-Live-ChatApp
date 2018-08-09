var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

function callme() {
    socket.emit("createMessage", { from: 'najam', text: "hi there", to: 'najam' });
    return "yes!"
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