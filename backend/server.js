import Express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routeAuth from "./controller/routes/auth.js";
import routeBug from "./controller/routes/bug.js";
const app = Express();
app.use(cors());

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/auth', routeAuth)
app.use('/bug', routeBug)
// dotenv.config({path: './'})
mongoose.connect('mongodb+srv://MERN:MERN@cluster0.9xphova.mongodb.net/bug-tracker-v2?retryWrites=true&w=majority')
    .then(r => {
        console.log("Connected to Database");
        // console.log(r.Types.ObjectId);
        app.listen(5000, function (err) {
            if (err) alert(err)
            console.log(`Successfully connected on port 5000`)
        })
    })
    .catch(err => {
        console.log(err);
    })
