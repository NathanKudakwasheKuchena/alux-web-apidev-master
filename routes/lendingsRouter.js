import express from "express";
import { addLending, viewAllLendings, viewLending, updateLending, deleteLending, viewMemberLendings } from '../controllers/lendingsController.js'
import { authenticate } from '../middlewares/auth.js';

const lendingsRouter = express.Router();

//Add a lending
lendingsRouter.post("/", addLending);

//View a lending lending/:id
lendingsRouter.get("/:id", viewLending);

//View all lendings lendings/
lendingsRouter.get("/" , viewAllLendings);

//Update a lending record lending:id
lendingsRouter.put("/:id", updateLending);

//Delete a lending lendings/:id
lendingsRouter.delete("/:id", deleteLending);

//View individual member lendings member/:id
lendingsRouter.get("/bymember/:id", viewMemberLendings)

export default lendingsRouter;






