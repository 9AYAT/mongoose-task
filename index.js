import express from "express"
import { connectDb } from "./db/connection.js"
import bookRouter from "./src/modules/book/book.router.js"
import authorRouter from "./src/modules/author/author.router.js"
const app=express()
app.use(express.json())
const port=3000
connectDb()
app.use('/book',bookRouter)
app.use('/author',authorRouter)
app.listen(port,()=>{
    console.log("server is running on",port)
})