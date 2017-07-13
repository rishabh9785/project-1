/**
 * Created by rishabh on 12/7/17.
 */
var mysql =require('mysql');

var dbconfig1={
    host:'localhost',
    username:'newuser',
    password:'newpassword',
    database:'cultural'
}
var dbconfig2={
    host:'localhost',
    username:'newuser',
    password:'newpassword',
    database:'technical'
}
function cultural(query,cb,param){
    var connection=mysql.createConnection(dbconfig1);
    connection.connect();
    connection.query(query,function(err,data){
         if(err) throw err
    });
}
function technical(query,cb,param){
    var connection=mysql.createConnection(dbconfig2);
    connection.connect();
    connection.query(query,function(data){

    });
}
module.exports={
    cultural,technical
}