import express from "express";
import { addBook, viewAllBooks, viewBook, updateBook, deleteBook } from '../controllers/booksController.js'
import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

//Add a book
booksRouter.post("/", addBook);

//View a book book/:id
booksRouter.get("/:id", viewBook);

//View all books books/
booksRouter.get("/" , viewAllBooks);

//Update a book record book:id
booksRouter.put("/:id", updateBook);

//Delete a book books/:id
booksRouter.delete("/:id", deleteBook);

export default booksRouter;






