import express from 'express';
import helloController from "./controllers/hello-controller.js";
import welcomeController from "./controllers/welcome-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
helloController(app);
welcomeController(app);
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(4000);