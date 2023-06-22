const mysql = require('mysql2/promise')

async function getConnection() {
    return mysql.createConnection({
        host: '51.159.75.199',
        port: "3424",
        user: 'dbAdmin',
        password: 'Clermont23?',
        database: 'user-system'
    });
}

module.exports = { getConnection };