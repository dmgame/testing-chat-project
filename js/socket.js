class Socket{
    constructor(url) {
        this._socket = io(url);
    }

    getUsers(callback) {
        this._socket.emit('getUsers', callback);
    }

    sendMessage(message, user) {
        this._socket.emit('chatMessage', message, user);
    }

    writingMessage(userName) {
        this._socket.emit('writeMessage', userName);
    }
}