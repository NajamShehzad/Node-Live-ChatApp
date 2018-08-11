var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

var form =document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    var formData = new FormData(form);
    console.log(formData.get('field'));
    var from = 'User';
    var text  = formData.get('field');
    socket.emit("newMessage", { from,text});
    form.reset();

})

socket.on('newUser', (data)=>{
    console.log('wellcome',data);
    var li = ` <li class="message">
    <div class="message__title">
      <h4>${data.from}</h4>
      <span>${data.createdAt}</span>
    </div>
    <div class="message__body">
      <p>${data.text}</p>
    </div>
  </li>
`
    document.getElementById('messages').innerHTML += li  
});




socket.on('newMessage', (data) => {
    console.log(data);
    var li = ` <li class="message">
    <div class="message__title">
      <h4>${data.from}</h4>
      <span>${data.createdAt}</span>
    </div>
    <div class="message__body">
      <p>${data.text}</p>
    </div>
  </li>
`
    document.getElementById('messages').innerHTML += li;
});
// socket.on('newUser', () => {
//     console.log('wellcome najam');
// });


socket.on("textnajam", (data) => {
    console.log(data);
});

function callme() {

    return (socket.emit("createMessage", { from: 'User', text: "hi there", to: 'najam' }));
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