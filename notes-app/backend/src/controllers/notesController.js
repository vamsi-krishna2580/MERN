import Note from "../models/Note.js"


export  const getAllnotes = async (_, res)=>{
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc order {newest first}
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllnotes controller", error);
        res.status(500).json({message: "Error Internal Server error"})
    }
};

export const getNoteById = async(req,res)=>{
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        if(!note) return res.status(404).json({message: "Note not found"});
        res.status(201).json(note);
    } catch (error) {
        console.error("Error in getNoteByID controller", error);
        res.status(500).json({message: "Error Internal Server error"})
    }
};

export const createNode = async (req,res)=>{
   try {
        const { title, content } = req.body
        const newNote = new Note({title:title, content:content});

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
   } catch (error) {
        console.error("Error in createNode controller", error);
        res.status(500).json({message: "Error Internal Server error"})
    }    
    
   }

export const updateNode = async (req,res)=>{
    try {
        const {content, title} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title:title, content:content},
            { new: true });

        if(!updatedNote)  return res.status(404).json({message: "Note not found"});
        res.status(201).json({message:"Note updated successfully"});

    } catch (error) {
        console.error("Error in updateNode controller", error);
        res.status(500).json({message: "Error Internal Server error"})
    }    
    }


export const deleteNode = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteNode = await Note.findByIdAndDelete(id)
        if(!deleteNode) return res.status(404).json({message: "Note not found"});
        res.status(201).json({message: "Note deleted successfully"});
    }catch(error){
        console.error("Error in updateNode controller", error);
        res.status(500).json({message: "Error Internal Server error"})
    }
}

