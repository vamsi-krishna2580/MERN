import user from "../models/signup.js";

export const create_user = async (req, res) =>{
    try {
        const { email, name, password } = req.body;
        console.log(req.body);
        const exists = await user.exists({email})
        if(exists) return res.status(409).json({message: "User already registerd"}); 
        const new_user = new user({email, name, password});
        await new_user.save();
        res.status(201).json({success:true,       data: {
        user: {
          id: new_user._id,
          email: new_user.email,
          name: new_user.name,
        },
      }, message: `User: ${name} registerd successfully`});
    
    } catch (error) {
        console.error("Error in create_user signupController", error);
        res.status(500).json({message: "Error Internal Server error"})
    }

};