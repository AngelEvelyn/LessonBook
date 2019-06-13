const { Pool, Client } = require('pg')
const connectionString = "postgres://mbveubsu:ZgbmA0F5ttJQoVCFmv-trTi6dVj5RnXe@raja.db.elephantsql.com:5432/mbveubsu"
// pools will use environment variables
// for connection information
const pool = new Pool({connectionString: connectionString})

pool.query('CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, username VARCHAR, password VARCHAR)', (err, res) => {
  console.log(err, res)
});

pool.query('CREATE TABLE IF NOT EXISTS plans (_id SERIAL PRIMARY KEY, title VARCHAR,  domain VARCHAR, materials VARCHAR,  steps VARCHAR, location VARCHAR, userID INTEGER)', (err, res) => {
  console.log(err, res)
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}