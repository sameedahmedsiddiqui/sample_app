var http = require('http');

http.createServer(function (req, res){
    res.write('Hello World! sameed');

    res.end();
}).listen(8080);

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myEventHandler = function () {
//     console.log('there sameed');
// }

// eventEmitter.on('geeks', myEventHandler);

// eventEmitter.emit('geeks');