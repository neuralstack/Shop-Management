const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const sessions = require("express-session");
const mongoose = require("mongoose");
const db_cred = require('./server/cred');
var cookieParser = require('cookie-parser');
const app = express();
app.set('views',path.join(__dirname,"/client/views"));
app.set('view engine','ejs');
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/client/public")));
app.use(sessions({
    secret: 'ddfd344f4dud8d8d8d8j',
    resave: false,
    saveUninitialized: true
}));
let route = require('./server/route.js')(app);
mongoose.connect("mongodb://"+db_cred.username+":"+db_cred.password+"@ds026018.mlab.com:26018/mall_management",{ useNewUrlParser: true  }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connection with mongodb is successfull");

    }
});
app.listen(80,()=>{
    console.log('server is running on port 80');
})
