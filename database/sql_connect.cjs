// import postgres from 'postgres';
const postgres = require('postgres');

const sql = postgres({
    hostname: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DB_NAME,
    username: process.env.PSQL_USERNAME,
    password: process.env.PSQL_PASSWORD,
});

module.exports = sql;