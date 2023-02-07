require('dotenv').config();

const config = {
    appConfig : {
        port: process.env.APP_PORT,
        host: process.env.APP_HOST,
    },

    dbConfig : {
        dbUrl: process.env.DB_URL,
        dbUser: process.env.DB_USER,
        dbPass: process.env.DB_PASS
    }
}

module.exports = config;