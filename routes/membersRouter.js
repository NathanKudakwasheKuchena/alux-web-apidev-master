import express from "express";
import { addMember, viewAllMembers, viewMember, updateMember, deleteMember } from '../controllers/membersController.js'
import { authenticate } from '../middlewares/auth.js';

const membersRouter = express.Router();

//Add a Member
membersRouter.post("/", addMember);

//View a member members/:id
membersRouter.get("/:id", viewMember);

//View all members members/
membersRouter.get("/" , viewAllMembers);

//Update member record 
membersRouter.put("/:id", updateMember);

//Delete a member members/:id
membersRouter.delete("/:id", deleteMember);

export default membersRouter;






