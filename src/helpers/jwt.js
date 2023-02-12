const jsonwebtoken = require("jsonwebtoken")

const jwt = {}

jwt.createToken = async (payload) => {
    try {
        const token = jsonwebtoken.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });
        return token;
    } catch (error) {
        throw error;
    }
};

jwt.decodeToken = (token) => new Promise((resolve, reject) => {
    jsonwebtoken.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            reject(err);
        } else {
            resolve(decode);
        }
    });
});

module.exports = jwt;