const Sequelize = require("sequelize");
require('dotenv').config()

const {CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getTrails: (req, res) => {
        sequelize.query(`
        SELECT * FROM trails
        `).then((dbRes) => {
            res.status(200).send(dbRes)
        }).catch(err => {
            console.log('error', err);
            res.status(500).send('Error getting trails')
        })
    }
}