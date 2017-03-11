const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/data',express.static('data'));
app.use('/code-style', express.static('styles'));
// <link rel="stylesheet" href="/path/to/styles/theme-name.css">
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
