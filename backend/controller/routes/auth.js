import Express from "express";
import {authGet, authUserPost, authUserPut} from "../router-logic/authLogic.js";

const routeAuth = Express.Router();

routeAuth.post('/user', authUserPost);  // Create New User (Sign Up)
routeAuth.put('/user', authUserPut);    // Modify an Existing User
// routeAuth.post('/', authGet);
routeAuth.get('/', authGet);            // Log In a User  (Sign In)

export default routeAuth;
