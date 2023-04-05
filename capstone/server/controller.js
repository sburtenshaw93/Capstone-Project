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
    },
    getRunning: (req, res) => {
        sequelize.query(`
        SELECT * FROM running
        `).then((dbRes) => {
            res.status(200).send(dbRes);
        }).catch(err => {
            console.log('error', err);
            res.status(500).send('Error getting Running Events');
        })
    },
    getCamping: (req, res) => {
        sequelize.query(`
        SELECT * FROM camping
        `).then((dbRes) => {
            res.status(200).send(dbRes)
        }).catch(err => {
            console.log('error', err);
            res.status(500).send('Error getting Camping List')
        })
    },
    getLakes: (req, res) => {
        sequelize.query(`
        SELECT * FROM lakes
        `).then((dbRes) => {
            res.status(200).send(dbRes)
        }).catch(err => {
            console.log('error', err);
            res.status(500).send('Error getting Lakes List')
        })
    },
    postCreateUser: (req, res) => {
        sequelize.query(`
        INSERT INTO createUser (username, password, phoneNumber, zipcode)
        VALUES ('${req.body.username}', '${req.body.password}', '${req.body.phoneNumber}', '${req.body.zipcode}');
        `).then((dbRes) => {
            res.status(200).send(dbRes)
        }).catch(err => {
            console.log('Error', err)
            res.status(500).send()
        })
    },
    postLogin: (req, res) => {
        sequelize.query(`
        SELECT * FROM createUser
        WHERE username = '${req.body.username}' AND password = '${req.body.password}' 
        `).then((dbRes) => {
            if (dbRes[0]) {
                res.status(200).send("Login was successful")
            } else {
                res.status(403).send()
            }
        }).catch(err => {
            console.log('Error', err)
            res.status(500).send()
        })
    }
}