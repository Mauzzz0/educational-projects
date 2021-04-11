
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

app.all('/', (req, res) => {
    console.log('URL = ' + req.url);
    console.log('OURL = ' + req.originalUrl);
    console.log('METHOD = ' + req.method);
    console.log('HOST = ' + req.headers.host);
    console.log('IsSecure = ' + req.secure);
    
    res.status(200).json({message: 'All is ok!' });
})

http.createServer(app).listen(3000, () => {
    console.log('Server ну типа запущен');
})
