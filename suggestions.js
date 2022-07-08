import { users } from "../../db/userdata.js";

function getAutoSuggest(loginSubstring, limit){
    const res=users.filter(user => !user.isDeleted );
    res.filter(user => user.login.includes(loginSubstring)).sort((u1,u2)=> u1.login.localeCompare(u2.login)).slice(0,limit);
    return res;
}

export const getAutoSuggestUsers= (req,res)=>{
    const result=getAutoSuggest(req.params.loginSubstring,req.params.limit);
    res.status(200).json(result);
}
