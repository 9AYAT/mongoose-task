import mongoose from "mongoose";
export const connectDb=()=>{
    mongoose.connect("mongodb://127.0.0.1/hti-3").then(()=>{
        console.log('db connect successfully')
    }).catch(err=>{
        console.log('fail to connect db')
    })

}