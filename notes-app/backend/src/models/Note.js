import mongoose from "mongoose";

// 1-create a schema
// 2- model based off of that schema

const noteSchema = new mongoose.Schema ({
    title:{
        type:String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true },
);

noteSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});


const Note = mongoose.model("note", noteSchema)

export default Note