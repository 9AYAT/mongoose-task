import { Book } from "../../../db/models/book.model.js"

//add new book
export const addBook=async(req,res,next)=>{
 
 const createdBook=await Book.insertMany([req.body])
return res.json({createdBook})
    }
    //get all book and pagination
    export const getAllBook=async(req,res,next)=>{
        let pageNumber=req.query.pageNumber*1||1//to handle if page string
    if(req.query.pageNumber<1) pageNumber=1
    const limit=2
    let skip=(parseInt(pageNumber)-1)*limit
        //const books=await Book.find().skip(skip).limit(limit)
        
      // res.json({books,limit,skip,pageNumber})
        
        //search
        const{title,author}=req.query
        const query={}
        if(title){
            query.title={$regex:title,$options:'i'}}
        if(author){
                query.author={$regex:author,$options:'i'}
            }
            console.log(query)
            const bookss=await Book.find(query).skip(skip).limit(limit)
           return res.json({bookss,limit,skip,pageNumber})
        }
    
    //get by id
    export const getById=async(req,res,next)=>{
       try{ 
        const book=await Book.findById(req.params.id)
    if(!book){
        throw Error('book not found',{cause:404})
    }
    return res.status(201).json({message:'book is added',data:book})
    }
       catch(error){
        return res.status(error.cause||500).json({message:error.message,success:false})

       }
    }
//update
export const updateBook=async(req,res,next)=>{
    const update=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(201).json({message:'book is updated',data:update})
}
//delete
export const deleteBook=async(req,res,next)=>{
    const deleteBook=await Book.findByIdAndDelete(req.params.id)
    if(!deleteBook){
        return res.status(404).json({message:'book isnot delete',success:false})
    }
    return res.status(201).json({message:'book is deleted',data:deleteBook})}