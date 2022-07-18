const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');

//getting response
app.get("/",(req,res)=>{
    res.render('home');
});

app.get("/math",(req,res)=>{
    res.render('math');
});
app.get("/alpha",(req,res)=>{
    res.render('alpha');
});
app.get("/bio",(req,res)=>{
    res.render('bio');
});
app.get("/chem",(req,res)=>{
    res.render('chem');
});

//listening port
app.listen(3000,()=>{
    console.log("listening at port 3000");
});
