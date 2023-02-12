const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'colleen84@ethereal.email', // generated ethereal user
            pass: '1fK4GDdx1AW4w6r4Xb', // generated ethereal password
        },
    });

module.exports = transporter;