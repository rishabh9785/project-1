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
var dbquery=[];
var tablequery=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname,'Frontend')));
app.get('/database/query1',function(req,res){
    query1=req.body.query1;
    dbquery.push(query1);
    console.log(query1);
    console.log(dbquery[0]);
    res.send(query1);
})
app.get('/database/query2',function(req,res){
    query2=req.body.id;
    tablequery.push(query2);
    console.log(tablequery[0]);
    console.log(query2);
    res.send(query2);
})
app.post('/insert/post',function(req,res){
    var string1=dbquery[0];
    console.log(string1);
    var string2=tablequery[0];
    if(string1==cultural) {
        if (string2 === frosh) {
            var queryFinal = "INSERT into frosh(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === saturnalia) {
            var queryFinal = "INSERT into saturnalia(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === spicmacay) {
            var queryFinal = "INSERT into spicmacay(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === tmc) {
            var queryFinal = "INSERT into tmc(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === cineyouth) {
            var queryFinal = "INSERT into cineyouth(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.conatct+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
    }
    else if(string1==="technical") {
        if (string2 === iete) {
            var queryFinal = "INSERT into iete(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === ccs) {
            var queryFinal = "INSERT into ccs(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === iiche) {
            var queryFinal = "INSERT into iiche(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === owasp) {
            var queryFinal = "INSERT into owasp(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact +"')";
            sql.string1(queryFinal, function (data) {
                console.log(data);
                res.send(data);
            })
        }
        else if (string2 === msc) {
            var queryFinal = "INSERT into msc(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact +"')";
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