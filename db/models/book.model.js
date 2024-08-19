import { Schema,model } from "mongoose";
const bookSchema=new Schema({
title:{
    type:String,
    required:true
},
content:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
},
puplishedDate:{
    type:Date,
    default:Date.now
}
},{timestamps:true})
//model
export const Book=model('Book',bookSchema)