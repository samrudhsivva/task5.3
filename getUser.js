import { users } from "../../db/userdata.js";

export const getUser = (req, res)=>{
    const {id}=req.params;
    const user= users.find(u=> u.id===id);
    if(!user || user.isDeleted){
        res.status(404).json({message: "User not found!"});
        return;
    }
    res.status(200).json(user);
}
