# RESTful server on Node.ts and MongoDB cluster in cloud.
### Capabilities:
  MVC app with typegoose, mongoose, mongoDB, controllers+services, middlewares (like (a)syncHandler, logger, errorHandler and etc), with authorization, 
  CRUD for `user` and `todo`.
### Models:
##### Todo
* `title`, `description`, `isComplete`, `userId`
##### User
* `email`, `password`, `phone`
##### Token
* `userId`, `accessToken`, `deviceId`, `refrestToken`, `atExpired`, `rtExpired`
##### ConfirmRegistration
* `email`, `userId`, `secretKey`
