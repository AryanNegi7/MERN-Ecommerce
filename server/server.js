require('dotenv').config();

const PORT=process.env.PORT || 8080;

const express=require('express');
const app=express();

const db=require('./Config/db');

const Post=require('./Model/post');

const Router=require('./Routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

db.then(()=>{
    app.listen(PORT,()=>{
        app.use('/',Router);
        console.log(`server running at http://localhost:${PORT}/`);
    })
}).catch((err)=>{
    console.log(`Error found ${err}`);
})