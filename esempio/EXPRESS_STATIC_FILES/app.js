var express = require('express');
var app = express();


const path = require('path');

app.get('/index',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname,'about.html')); //__dirname : Ritorna la cartella del progetto
})
app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname,'sitemap.html')); //__dirname : Ritorna la cartella del progetto
})


