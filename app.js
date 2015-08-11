var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    index = require('./routes/index');
    // io = require('socket.io').listen(server);

app.set('views', path.join(__dirname,'views'));

server.listen(3000);

// routes
app.use('/', index);
