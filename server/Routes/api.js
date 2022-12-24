
const express=require('express');
const api_router=express.Router();

const Post=require('../Model/post');

api_router.route('/')
.get((req,res)=>{
    res.send('Hello get api');
})
.post(async(req,res)=>{
    try
    {
        const post=await new Post(req.body);
        const post_document=await post.save();
        res.send(post_document); 
    }
    catch(err){
        console.log("Error here bro");
        // res.write('danm son');
        res.status(404).send(err); 
    }
})


module.exports=api_router;
