import openSocket from 'socket.io-client';
// start the client socket
// Local Server
// const socket = openSocket('http://localhost:5000/');
// Heroku Server
const socket = openSocket('https://road-master.herokuapp.com/');

export default socket;
