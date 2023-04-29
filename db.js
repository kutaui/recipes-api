const Pool = require('pg').Pool

const pool = new Pool({
    user:process.env.USER_NAME,
    host:"balarama.db.elephantsql.com",
    database:process.env.USER_NAME,
    password:process.env.PASSWORD,
    port:"5432",
})

module.exports = pool;