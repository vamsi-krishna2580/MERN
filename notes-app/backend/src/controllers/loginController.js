import user from "../models/signup.js";

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