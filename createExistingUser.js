import { userSchema } from "../schema/userSchema.js";
import {users} from "../../db/userdata.js";

export const validateExistingUser= (req,res,next)=>{
    const user=req.body;
    const {error} =userSchema.validate(user);
    if(error){
        res.status(400).json({message: error.details[0].message});
        return;
    }
    const index=users.findIndex(u => u.id===user.id);
    if(index===-1 || users[index].isDeleted){
        res.status(400).json({message: "User doesn't exist"});
        return;
    }
    next();
}