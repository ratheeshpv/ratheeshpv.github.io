const io = require('socket.io')(8000);

io.on('connection', socket => {
  // either with send()
  socket.send('Hello!');

  //// or with emit() and custom event names
  //socket.emit('my_message', 'Hey!', { 'ms': 'jane' }, Buffer.from([4, 3, 3, 1]));
  // or with emit() and custom event names
  socket.emit('my_message', 'Hey!');

  // handle the event sent with socket.send()
  socket.on('message', (data) => {
    console.log(data);
  });

  //// handle the event sent with socket.emit()
  //socket.on('my_response', (elem1, elem2, elem3) => {
    //console.log(elem1, elem2, elem3);
  //});
  // handle the event sent with socket.emit()
  socket.on('my_response', (elem1) => {
    console.log(elem1);
  });
});
