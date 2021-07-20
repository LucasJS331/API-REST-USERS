var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS_KEY,
      database : process.env.DB_NAME
    }
  });

module.exports = knex