var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});
function scrollToBottom() {
    // Selectors
    var messages = jQuery('#messages');
    var newMessage = messages.children('li:last-child')
    // Heights
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();

    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        messages.scrollTop(scrollHeight);
    }
}









var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    console.log(formData.get('field'));
    var from = 'User';
    var text = formData.get('field');
    socket.emit("newMessage", { from, text });
    form.reset();

})

socket.on('newUser', (data) => {
    console.log('wellcome', data);
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
    scrollToBottom();
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