
const express=require('express');
const Post=require('../Model/post');

const Router=express.Router();

const api_router=require('./api');

Router.route('/')
    .get((req,res)=>{
        res.send('Hello get');
    })
    .post(async(req,res)=>{
        res.send('hello post'); 
    })

Router.use('/api',api_router);
module.exports=Router;