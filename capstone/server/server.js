require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const { } = require('./controller.js')

app.use(express.json())
app.use(cors())

app.listen(5513, () => console.log('Server is up on running on 5513'))