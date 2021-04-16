const db1 = require('./db');
const server = require('./Server');
const app = require('./App').start_app();
// const todo = require('./Schemas').get_schema_todo(); If you need model


server.start_server(app, 3000);
db1.connect();