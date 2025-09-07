const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");

app.get("/", (req,res)=>{
    fs.readdir("./files",(err,files)=>{
        res.render('index', {files});
    })
})
app.get("/files/:filename", (req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        res.render('show',{filename: req.params.filename , filedata: filedata});
    })
})

app.post("/create", (req,res)=>{
    const {title, details} = req.body;
    fs.writeFile(`./files/${title.split(' ').join("")}.txt`, details, (err)=>{
        res.redirect("/");
    })
})

app.get("/edit/:filename", (req,res)=>{
    res.render('edit',{filename:req.params.filename});
})

app.post("/edit", (req,res)=>{
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
        res.redirect("/");
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
