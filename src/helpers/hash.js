const bc = require('bcrypt');

const hash = {}

hash.hashPassword = async (password) => {
    try {
        const salt = await bc.genSalt(10);
        const result = await bc.hash(password, salt);
        return result;
    } catch (error) {
        throw error;
    }
};

hash.compare = (dataInput, dataHash) => new Promise(async (resolve, reject) => {
    try {
        resolve(await bc.compare(dataInput, dataHash))
    } catch (error) {
        reject(error)
    }
})

module.exports = hash;