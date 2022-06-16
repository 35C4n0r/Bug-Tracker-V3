// import mongoose, {model, Schema} from "mongoose";

import mongoose from "mongoose";

const {Schema, model} = mongoose;

const authSchema = new Schema({
    mail: String,
    name: String,
    password: String,
    role: String,
})

export const authModel = model('auth', authSchema);
