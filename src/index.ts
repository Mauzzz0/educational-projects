import fs from 'fs' 
import express from 'express'
import BaseController from "./core/BaseController";
import {logger, errorHandler, notFound} from "./middlewares/middleware"

const app = express();
app.use(logger);


const controllers = fs.readdirSync(__dirname + '/controllers/');

for (let file of controllers) {
    const controller = require(`${__dirname}/controllers/${file}`).default as BaseController;

    app.use(`${controller.path}`, controller.router);
}

app.use(errorHandler);
app.use(notFound);



app.listen(3000, function(){console.log("Server started...")});
