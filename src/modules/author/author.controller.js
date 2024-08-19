import { Author } from "../../../db/models/author.model.js"

//create new author
export const addAuthor=async(req,res,next)=>{
    const newAuthor=await Author.insertMany([req.body])
    return res.json({newAuthor})
}
//get all author and pagination and search
export const getAllAuthor=async(req,res,next)=>{
    let pageNumber=req.query.pageNumber*1||1//to handle if page string
    if(req.query.page<1) pageNumber=1
    const limit=2
    let skip=(parseInt(pageNumber)-1)*limit
    const getAll=await Author.find()
   // return res.json({getAll,pageNumber,limit,skip})
     //search
     const{name,bio}=req.query
     const query={}
     if(name){
         query.name={$regex:name,$options:'i'}}
     if(bio){
             query.bio={$regex:bio,$options:'i'}
         }
         console.log(query)
         const books=await Author.find(query).skip(skip).limit(limit)
        return res.json({books,limit,skip,pageNumber})
     
    }
    //get by id and relation 
  export const getBy=async(req,res,next)=>{
    try{
       const author=await Author.findById(req.params.id).populate([{path:'books'}])
       if(!author){
        throw Error('autor not found',{cause:404})
       }
       return res.status(201).json({message:'author is added',data:author})

    }catch(error){
        return res.status(error.cause||500).json({message:error.message,success:false})
    }
  }

//update
export const updateAuthor=async(req,res,next)=>{
    const updates=await Author.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(201).json({message:'author is updated',data:updates})
}
//delete
export const deleteAuthor=async(req,res,next)=>{
    const deleteauthor=await Author.findByIdAndDelete(req.params.id)
    if(!deleteAuthor){
        return res.status(404).json({message:'author isnot delete',success:false})
    }
    return res.status(201).json({message:'book is deleted',data:deleteauthor})}