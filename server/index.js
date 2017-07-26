var nodemailer = require('nodemailer');
const inlineBase64 = require('nodemailer-plugin-inline-base64');
// var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// const Meteor = require('moment');
const process = require('../secret.js');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSW
  }
});

transporter.use('compile', inlineBase64());

// app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/contact');
// app.get('/api/contact', function(req, res) {

// });

app.post('/api/contact', function(req, res) {

/*///////// START - THE NODEMAILER PART ///////////*/

  // setup e-mail data
  var mailOptions = {
      // from: '"' + req.body.author + '" <' + process.env.TEST_SENDER + '>', // sender address

      from: '"' + req.body.name + '" <' + req.body.email + '>', //sender
      to: 'shon.elias@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      // text: req.body.text, // plaintext body
      text: 'You recived an email from: ' + req.body.name + '\n\n' + req.body.body  + '\n\n\n' + 'Contact Details of '+ req.body.name + '\nPhone: ' + req.body.phone + '\nReply to Email Address: ' + req.body.email// html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log("email could not send due the error: ", error);
      }
      // console.log('Message sent: ' + info.response);
      res.json(info);
  });


});

app.listen((process.env.PORT || 3000), function() {
  console.log('Server started on: ' + process.env.PORT);
});

