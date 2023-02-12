const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer")

const sendMail = {}

sendMail.test = async () => {

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo" <foo@example.com>', // sender address
        to: "gustiana882@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    return info
}

module.exports = sendMail;