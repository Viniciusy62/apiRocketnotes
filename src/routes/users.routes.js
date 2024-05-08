const { Router } = require("express");

const UserController = require("../controllers/UsersController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();

//Exemplo de uso do middleware
// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo Middleware");

//   console.log(request.body)

//   if(!request.body.isAdmin) {
//     return response.json({ message: "user unauthorized" })
//   }

//   next()
// }

// userRoutes.post("/", myMiddleware, userController.create);

const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.put("/", ensureAuthenticated, userController.update);

module.exports = userRoutes;
