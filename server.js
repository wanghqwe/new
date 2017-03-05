var express=require('express');
var path=require('path');
var Movie=require('./task/model').Movie;
var app=express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.resolve('node_modules')));
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies})
    })
})

app.listen(80);
