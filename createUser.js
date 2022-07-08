import { users } from "../../db/userdata.js";

export const createUser= (req,res)=>{
    const user=req.body;
    user.isDeleted=false;
    user.age=parseInt(user.age,10);
    if(users.find(u=> u.id === user.id)){
        res.status(400).json({message: "User Already Exists"});
        return;
    }
    if(users.length!==users.push(user)){
        users.push(user);
        res.json({message: "Successfully Created user!"});
    }
    else{
        res.status(400).json({message: "Failed to create user"});
    }
}
