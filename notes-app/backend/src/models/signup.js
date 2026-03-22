import mongoose from "mongoose";

const signup_schema = new mongoose.Schema({
    email: {
    type:String,
    required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const user = mongoose.model("user", signup_schema);
export default user;