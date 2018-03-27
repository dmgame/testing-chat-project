// Get user
const user = JSON.parse(localStorage.getItem('user'));
// Redirect on login
if (!user) window.location = 'login.html';
// Init socket
const chat = new Socket('https://easycode-test-chat.herokuapp.com/');
const socket = chat._socket;
// Init UI
const ui = new UI();

const form = document.forms['messageForm'];
const message = form.elements['message'];

// Connection
socket.on('connection', () => {
    console.log('Connected success!');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (message.value) {
            chat.sendMessage(message.value, user);
            message.value = '';
        }
    });

    message.addEventListener('keyup', (e) => {
        chat.writingMessage(user.name);
    });
   
    socket.on('chatMessage', (message, user) => ui.showMessage(message, user));

    socket.on('writeMessage', (name) => ui.showWritingMessage(name));

});