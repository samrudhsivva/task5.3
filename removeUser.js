import { users } from "../../db/userdata.js";

export const removeUser= (req,res)=>{
    const {id}=req.params;
    const index=users.findIndex(user => user.id === id);
    if(index!==-1){
        users[index].isDeleted=true;
        res.status(200).json({message: "User Deleted Successfully"});
        return;
    }
    res.status(400).json({message: "Failed to delete User"});
}
