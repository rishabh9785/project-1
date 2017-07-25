/**
 * Created by rishabh on 25/7/17.
 */
/**
 * Created by rishabh on 12/7/17.
 */
var express =require('express');
var bodyParser=require('body-parser');
var sql=require('./sql');
var path=require('path');
var QRcode=require('qrcode');
var engines=require('consolidate');
var nodemailer=require('nodemailer');
var port=4000||process.env.PORT;
var app=express();
var query1,query2;
var dbquery=[];
var tablequery=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname,'Frontend')));
app.set('views',__dirname+'/Frontend');
app.engine('html',engines.mustache);
app.set('view engine','html');
app.post('/query1',function(req,res){
    query1=req.body.query1;
    dbquery.push(query1);
    console.log(query1);
    console.log(dbquery[0]);
    console.log("hello");
    console.log("hello");
    res.send(query1);
});
app.post('/query2',function(req,res){
    query2=req.body.id;
    tablequery.push(query2);
    console.log(tablequery[0]);
    console.log(query2);
    res.send(query2);
});
app.post('/insert/post',function(req,res){
    var string1=dbquery[0];
    dbquery.pop(query1);
    console.log(string1);
    var string2=tablequery[0];
    tablequery.pop(query2);
    console.log(string2);
    var userEmailID=req.body.email;
    var userName=req.body.name;
    var userContact=req.body.contact;
    if(string1==="cultural") {
        if (string2 === "frosh") {
            var file = new Date();
            let queryFinal = "INSERT into frosh(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact + "')";

            console.log('hey toFile is running');
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                        "+
                                                                           "Event:CITY TOUR"+"                              "+
                                                                           "Pickup Point:Parking Area"+"                                           "+
                                                                           "Time:10AM-5PM"+"                                           "+
                                                                           "Date:3rd August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.cultural(queryFinal, function (data) {
                console.log("hello queryFinal");
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
                // function sendEmail(userEmailID,file){
                //     var cid_value=file+'.png';
                //     console.log(cid_value);
                //     var transport = nodemailer.createTransport({
                //         service: "Gmail",
                //         auth: {
                //             user: "tueventregister@gmail.com",
                //             pass: "coolevents"
                //         }
                //     });
                //     var mailOptions = {
                //         from: "tueventregister@gmail.com",
                //         to: userEmailID,
                //         generateTextFromHTML:true,
                //         forceEmbeddedImages:true,
                //         subject: "Registration Confirmation",
                //         text: "Hi"+" "+userName,
                //
                //         html:'<body><h3>This is a confirmation message that your seat has been booked for'+" " +string2+" "+'society event registered at TUevento.com</h3><br>' +
                //         '<h2>Please make sure to bring this generated QR CODE at the event venue for scanning purposes.</h2><br>' +'<img src="cid:'+ cid_value +'" >'+
                //         "</body>",
                //
                //         attachments: [{
                //         filename:file+'.png',
                //             path:"/media/rishabh/LENOVO/CODING_BLOCKS/Project1_copy/Frontend/generated_qrcode/"+file+'.png',
                //         //streamSource:fs.createReadStream("/Frontend/generated_qrcode/"+file+'.png'");
                //         cid: cid_value //same cid value as in the html img src
                //         }]
                //     }
                //     transport.sendMail(mailOptions,function(err,res){
                //         if (err)
                //             console.log(err);
                //
                //     });
                // }

            })


            res.redirect('/index.html');
        }


        else if (string2 === "saturnalia") {
            let file = new Date();
            let queryFinal = "INSERT into saturnalia(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                            "+
                                                                           "Event:TEDx Tech Talk"+"                              "+
                                                                           "Venue:TAN AUDI"+"                                           "+
                                                                           "Time:6PM-9PM"+"                                           "+
                                                                           "Date:17th August 2017"], {

                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.cultural(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
                //res.send(data);
            })
        }
        else if (string2 === "spicmacay") {
            let file = new Date();
            let queryFinal = "INSERT into spicmacay(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                                 "+
                                                                           "Event:SITAR EVE"+"                              "+
                                                                           "Venue:TAN AUDI"+"                                           "+
                                                                           "Time:5:30PM-8:30PM"+"                                           "+
                                                                           "Date:25th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.cultural(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
        else if (string2 === "tmc") {
            let file = new Date();
            let queryFinal = "INSERT into tmc(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                             "+
                                                                           "Event:Movie Showcase"+"                              "+
                                                                           "Venue:TAN AUDI"+"                                           "+
                                                                           "Time:6PM-9PM"+"                                           "+
                                                                           "Date:20th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.cultural(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
        else if (string2 === "cineyouth") {
            let file = new Date();
            let queryFinal = "INSERT into cineyouth(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                       "+
                                                                           "Event:Comedian Night(BY SAHIL SHAH)"+"                              "+
                                                                           "Venue:TAN AUDI"+"                                           "+
                                                                           "Time:6PM-9PM"+"                                           "+
                                                                           "Date:17th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.cultural(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
    }
    else if(string1==="technical") {
        if (string2 === "iete") {
            let file = new Date();
            let queryFinal = "INSERT into iete(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                             "+
                                                                           "Event:Guest Lecture(By IETE PRESIDENT)"+"                             "+
                                                                           "Venue:TAN AUDI"+"                                          "+
                                                                           "Time:9AM-12AM"+"                                             "+
                                                                           "Date:3rd August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.technical(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
        else if (string2 === "ccs") {
            let file = new Date();
            let queryFinal = "INSERT into ccs(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                                     "+
                                                                           "Event:Hackathon"+"                                              "+
                                                                           "Venue:T-104"+"                                           "+
                                                                           "Time:9pm-9am"+"                                           "+
                                                                           "Date:4th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.technical(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
        else if (string2 === "iiche") {
            let file = new Date();
            let queryFinal = "INSERT into iiche(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact+"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                                     "+
                                                                           "Event:Guest Lecture(Trends in Chemical Industry)"+"                                              "+
                                                                           "Venue:Main AUDI"+"                                           "+
                                                                           "Time:10AM-1AM"+"                                           "+
                                                                           "Date:8th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.technical(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
        else if (string2 === "owasp") {
            let file = new Date();
            let queryFinal = "INSERT into owasp(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact +"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                                     "+
                                                                           "Event:Guest Lecture(Networking)"+"                                              "+
                                                                           "Venue:Main AUDI"+"                                           "+
                                                                           "Time:5PM-8PM"+"                                           "+
                                                                           "Date:13th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.technical(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
        else if (string2 === "msc") {
            let file = new Date();
            let queryFinal = "INSERT into msc(Name,Email,Contact) values('" + req.body.name + "','" + req.body.email + "','" + req.body.contact +"')";
            QRcode.toFile('./Frontend/generated_qrcode/' + file + '.png', ["Name:"+req.body.name+"                             "+
                                                                           "Email-id:"+req.body.email+"                                            "+
                                                                           "Contact:"+req.body.contact+"                                     "+
                                                                           "Event:RUMBLE 2k17"+"                                              "+
                                                                           "Venue:TAN AUDI"+"                                           "+
                                                                           "Time:10AM-12AM"+"                                           "+
                                                                           "Date:15th August 2017"], {
                color: {
                    dark: '#00F',  // Blue dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err
                console.log('done');
            })
            sql.technical(queryFinal, function (data) {
                console.log(data);
                sendEmail(userEmailID,userName,file,string2);
            })
            res.redirect('/index.html');
        }
    }
})
function sendEmail(userEmailID,userName,file,string2){

    var cid_value=file+'.png';
    console.log(cid_value);
    var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "tueventregister@gmail.com",
            pass: "coolevents"
        }
    });
    var mailOptions = {
        from: "tueventregister@gmail.com",
        to: userEmailID,
        generateTextFromHTML:true,
        forceEmbeddedImages:true,
        subject: "Registration Confirmation",
        text: "Hi"+" "+userName,

        html:'<body><h3>This is a confirmation message that your seat has been booked for'+" " +string2+" "+'society event registered at TUevento.com</h3><br>' +
        '<h2>Please make sure to bring this generated QR CODE at the event venue for scanning purposes.</h2><br>' +'<img src="cid:'+ cid_value +'" >'+
        "</body>",

        attachments: [{
            filename:file+'.png',
            path:"/media/rishabh/LENOVO/CODING_BLOCKS/Project1_copy/Frontend/generated_qrcode/"+file+'.png',

            cid: cid_value //same cid value as in the html img src
        }]
    }
    transport.sendMail(mailOptions,function(err,res){
        if (err)
            console.log(err);

    });
}

app.listen(port,function(){
    console.log('server is running on port 4000');
})