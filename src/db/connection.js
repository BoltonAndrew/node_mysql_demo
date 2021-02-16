const mysql = require('mysql2');
require('dotenv').config();
const { promisify } = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
});

const promisifiedQuery = promisify(connection.query).bind(connection);


connection.end();