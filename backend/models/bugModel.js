import mongoose from "mongoose";

const {Schema, model} = mongoose;

const bugSchema = new Schema({
    bug: String,
    assigned: String,
    created: Date,
    due: Date,
    status: String,
    assignee: String, // Assignee here refers to reporter //
    severity: String,
    description: String,
})

const bugModel = model('bugs', bugSchema);
export default bugModel;
