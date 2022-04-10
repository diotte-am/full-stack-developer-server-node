import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import welcomeController from "./controllers/welcome-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://adiotte:WebDev@cluster0.jayxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const app = express();
app.use(cors());
helloController(app);
welcomeController(app);
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);