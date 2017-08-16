require('dotenv').config({
    path:"./.env"
});

let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000
    nodemailer = require('nodemailer'),
    twilio= require('twilio'),
    client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);




app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(4000, function() {
    console.log('Server up on port:', port);
});//end of port listen



app.get('/', function(req, res)  {
    console.log('Main url hit');
    res.sendFile(path.resolve('public/views/index.html'));
});//end of get



let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'moisesmigueledu@gmail.com',
        pass:'Vd7510qqq'
    }
});//end of transporter

app.post('/', (req, res) => {
    let mailer = req.body;

    client.messages.create({
        to:'9522209630',
        from:'7633249718',
        body:mailer.message + " ---->" + mailer.email
    }, function(err, data) {
        if (err) {
            console.log('err', err);
            console.log('data', data);
        }
    });//en d of sendMessage

    console.log('post url hit', req.body);

    let mailOptions = {
        from:mailer.email,
        to:'moisesmigueledu@gmail.com',
        subject:mailer.subject,
        text:'Message From Bio Page',
        html:"Message from " + mailer.email + " " + mailer.name + "<br>" + mailer.message
    };//

    transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
              console.log('mail not send');
            res.status(500).send(error);
            // return console.log(error);
          } else {
              console.log('mail send');
            res.sendStatus(200);
          }
        });



});//end of post
