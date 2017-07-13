/**
 * Created by rishabh on 12/7/17.
 */
var express =require('express');
var bodyParser=require('body-parser');
var sql=require('./sql');
var path=require('path');
var port=4000||process.env.port;
var app=express();
var query1,query2;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname,'Frontend')));
app.get('/database/query1',function(req,res){
    query1=req.body.query1;
    res.send(query1);
})
app.get('/database/query2',function(req,res){
    query2=req.body.id;
    res.send(query2);
})
app.post('/insert/post',function(req,res){
    var string1=query1;
    var string2=query2;
    if(string1==="cultural") {
        if (string2 === frosh) {
            var queryFinal = "Insert into frosh(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === saturnalia) {
            var queryFinal = "Insert into saturnalia(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === spicmacay) {
            var queryFinal = "Insert into spicmacay(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === tmc) {
            var queryFinal = "Insert into tmc(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === cineyouth) {
            var queryFinal = "Insert into cineyouth(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.conatct+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
    }
    else if(string1==="technical") {
        if (string2 === iete) {
            var queryFinal = "Insert into iete(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === ccs) {
            var queryFinal = "Insert into ccs(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === iiche) {
            var queryFinal = "Insert into iiche(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === owasp) {
            var queryFinal = "Insert into owasp(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact +"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === msc) {
            var queryFinal = "Insert into msc(Name,Email,Contact) Values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact +"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
    }
})
app.listen(port,function(){
    console.log('server is running on port 4000');
})