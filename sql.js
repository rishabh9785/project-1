/**
 * Created by rishabh on 12/7/17.
 */
var mysql =require('mysql');

var dbconfig1={
    host:'localhost',
    user:'newuser',
    password:'newpassword',
    database:'cultural'
}
var dbconfig2={
    host:'localhost',
    user:'newuser',
    password:'newpassword',
    database:'technical'
}
function cultural(query,cb,param){
    var connection=mysql.createConnection(dbconfig1);
    console.log("db1 is connected");
    connection.connect();
    connection.query(query,function(err,data){
         if(err) throw (err)
         cb(data);
         console.log(data);
         connection.end();
    });
}
function technical(query,cb,param){
    var connection=mysql.createConnection(dbconfig2);
    console.log("db2 is connected");
    connection.connect();
    connection.query(query,function(err,data){
        if(err) throw (err)
        cb(data);
        console.log(data);
        connection.end();
    });
}
module.exports={
    cultural,technical
}