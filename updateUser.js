import { users } from "../../db/userdata.js";

export const updateUser =(req,res)=>{
    const {id}=req.params;
    const index= users.findIndex(user => user.id===id);
    if(index===-1 || users[index].isDeleted){
        res.status(400).json({message: "User not found"});
        return;
    }
    users[index]=req.body;
    res.status(200).json({message:"User updated Successfully!"});
}
