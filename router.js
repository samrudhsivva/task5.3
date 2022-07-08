import { Router } from "express";
import {getUser} from "../controller/getUser.js";
import {createUser} from "../controller/createUser.js";
import {removeUser} from "../controller/removeUser.js";
import {getAutoSuggestUsers} from "../controller/suggestions.js";
import {updateUser} from "../controller/updateUser.js";
import {validateExistingUser} from "../middleware/validateExistingUser.js";
import {validateUser} from "../middleware/validateUser.js";

export const router =Router();

router.get('/getUser/:id',getUser);
router.post('/createUser',validateUser,createUser);
router.delete('/removeUser/:id',removeUser);
router.put('/updateUser/:id',validateExistingUser,updateUser);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit',getAutoSuggestUsers);

//export default {router};
