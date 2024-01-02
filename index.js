const exp=require('express');
const nodemon=require('nodemon')
const bodyparser=require('body-parser');
const app=exp();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
})
app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/regform.html");
});
app.post("/fdata",(req,res)=>{
    var name=req.body.name;
    var uname=req.body.uname;
    var email=req.body.email;
    var passwd=req.body.passwd;
    var phone=req.body.phone;
    var colorr=req.body.color;
    var gender=req.body.gender;

    // res.send(`Name:- ${name} <br> User Name:- ${uname} <br> Email:- ${email}<br> Password:- ${passwd} <br> PhoneNumber:- ${phone}<br> Color:- ${ colorr}<br> Gender:- ${gender}`)
    res.redirect('/login')

})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contactus.html");
});
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})


app.all('*',(req,res)=>{
    res.status(404).sendFile(__dirname+"/404.html")
})

app.listen(8002,()=>console.log("http://localhost:8002/"));