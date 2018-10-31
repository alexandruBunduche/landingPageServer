const nodemailer = require('nodemailer');

let transporter;
let transporterOptions = {};
let mailOptions = {};

transporterOptions.host = 'smtp.gmail.com';
transporterOptions.port = 465;
transporterOptions.secure = true; // true for 465, false for other ports
transporterOptions.auth = { user: 'recruitinglandingpage11@gmail.com', pass: "1234567890'" };

transporter = nodemailer.createTransport(transporterOptions);
// setup email data with unicode symbols
mailOptions.from = 'Dale Consulting';       // sender address
mailOptions.to = '';                        // list of receivers
mailOptions.subject = 'Dale Consulting';    // Subject line
mailOptions.text = 'Dale Consulting';       // plain text body  


function sendWelcomeMail(mailReceiver) {

    mailOptions.to = mailReceiver;
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
}

module.exports.sendWelcomeMail = sendWelcomeMail;