const model = require('../models/model.auth')
const nodemailer = require("nodemailer");
const { knex } = require("../config")
const { jwt, response, sendMail } = require('../helpers')

const auth = {}

auth.login = async (req, res) => {
    try {
        const pass = "123456"
        const data = model.user;

        if (data.password == pass) {
            const token = await jwt.createToken({ name: data.name })

            response(res, 200, true, "Login success", { token })
        } else {
            response(res, 401, false, "Login failed")
        }
    } catch (error) {
        response(res, 500, false, error)
    }
}

auth.getUser = async (req, res) => {
    try {
        const data = await knex()

        console.log(data)
        
    } catch (error) {
        response(res, 500, false, error)
    }
}


auth.email = async (req, res) => {
    try {     
        const info = await sendMail.test()
        response(res, 200, true, "Send email success", {
            messageId: info.messageId,
            previewUrl: nodemailer.getTestMessageUrl(info)
        })
    } catch (error) {
        response(res, 500, false, error)
    }
}

module.exports = auth;