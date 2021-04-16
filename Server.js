function start_server(app, port){
    const http = require('http');
    http.createServer(app).listen(port, () => {
        console.log('Server started. Port: ' + port);
    });
}

exports.start_server = start_server