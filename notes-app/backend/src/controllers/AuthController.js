import user from "../models/User.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const login_user = await user.findOne({email, password})

        if (!login_user) {
        return res.status(404).json({
            success: false,
            message: "User does not exist",
        });
        }

        return res.status(200).json({
            "success": true,
            "data":{
                "user": {
                    "id": login_user._id,
                    "email":login_user.email,
                    "name":login_user.name,
                },
            },
            message: "User login successfully",
        });
    } catch (error) {
        console.error("Error in login loginController", error);
        res.status(500).json({message: "Error Internal Server error"})
    }
};

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