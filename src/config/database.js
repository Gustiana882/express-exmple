const knex = require('knex')

const option = {
    client: 'mysql',
    connection: {
        host : 'mysql',
        port : 3306,
        user : 'root',
        password : 'root',
        database : 'testing'
    },
}

const database = knex.knex(option)

module.exports = database;
  