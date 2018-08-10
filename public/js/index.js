var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

var form =document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    var formData = new FormData(form);
    console.log(formData.get('field'));
    var from = 'najam';
    var text  = formData.get('field');
    socket.emit("newMessage", { from,text});

})

socket.on('newUser', (data)=>{
    console.log('wellcome',data);
    document.getElementById('list').innerHTML += `<li>${data.from} : ${data.text} </li>`  
});




socket.on('newMessage', (data) => {
    console.log(data);
    document.getElementById('list').innerHTML += `<li>${data.from} : ${data.text} </li>`
});
// socket.on('newUser', () => {
//     console.log('wellcome najam');
// });


socket.on("textnajam", (data) => {
    console.log(data);
});

function callme() {

    return (socket.emit("createMessage", { from: 'najam', text: "hi there", to: 'najam' }));
}
socket.on("createMessage", (data) => {
    console.log(data);
});
function deActive() {
    socket.off("textnajam");
}


socket.on('disconnect', () => {
    console.log('Disconected from Server');
});