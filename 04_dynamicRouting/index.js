const express= require('express');
const app= express();
const path= require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  fs.readdir('./files',(err,files)=>{
    if(files.length>=0){
        res.render('index',{files:files});
  }})
});

app.post('/create', (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(' ').join('_')}.txt`, req.body.content, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating file');
    }
    res.redirect('/');
  })
});

app.get("/files/:fileName",(req,res)=>{
    fs.readFile(`./files/${req.params.fileName}`,'utf-8',(err,fileData)=>{
      res.render("task",{fileData:fileData,fileName:req.params.fileName});
})});

app.get("/edit/:fileName",(req,res)=>{
    fs.readFile(`./files/${req.params.fileName}`,'utf-8',(err,fileData)=>{
      res.render("edit",{fileData:fileData,fileName:req.params.fileName});
    });
});

app.post("/edit/:fileName",(req,res)=>{
    fs.writeFile(`./files/${req.params.fileName}`,req.body.newContent,(err)=>{
        if(err){
            console.error(err);
            return res.status(500).send('Error editing file');
        }
    });
    if(req.params.filename!==req.body.newName){
        fs.rename(`./files/${req.params.fileName}`,`./files/${req.body.newName}`,(err)=>{
            if(err){
                console.error(err);
                return res.status(500).send('Error renaming file');
            }
        });
    }
    res.redirect('/files/'+req.body.newName);
});

app.listen(3000,()=>{
    console.log("server started");
});