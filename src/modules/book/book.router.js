import { Router } from "express";
import { addBook, deleteBook, getAllBook, getById,  updateBook } from "./book.controller.js";
const bookRouter=Router()
bookRouter.post('/addbook',addBook)
bookRouter.get('/getAll',getAllBook)
bookRouter.get('/:id',getById)
bookRouter.patch('/:id',updateBook)
bookRouter.delete('/:id',deleteBook)
export default bookRouter