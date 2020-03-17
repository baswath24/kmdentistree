const smtpTransport = require('nodemailer-smtp-transport')
const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'kmdentistreetest@gmail.com', // generated ethereal user
        pass: 'Test@123' // TODO: your gmail password
    },
    tls: {
        rejectUnauthorized: false
     }
}));

// Step 2
let mailOptions = {
    from: 'kmdentistreetest@gmail.com',
    to: 'saranga.rohith@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log(err);
    }
    return log('Email sent!!!');
});