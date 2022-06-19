import Express from "express";
import {bugCreatePost, bugDeleteDelete, bugEditPut, bugGet} from "../router-logic/bugLogic.js";

const routeBug = Express.Router();

routeBug.get('/', bugGet)
routeBug.put('/saveEdit', bugEditPut)
routeBug.post('/create', bugCreatePost)
routeBug.delete('/delete', bugDeleteDelete)

export default routeBug;
