import{Router} from "express"
import { addAuthor, deleteAuthor, getAllAuthor, getBy, updateAuthor } from "./author.controller.js"
const authorRouter=Router()
authorRouter.post('/addauthor',addAuthor)
authorRouter.get('/get',getAllAuthor)
authorRouter.get('/:id',getBy)
authorRouter.patch('/:id',updateAuthor)
authorRouter.delete("/:id",deleteAuthor)
export default authorRouter