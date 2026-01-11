const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const db = require('./models')
const qrRoutes = require('./routes/qr.routes')

const app = express()
app.use(bodyParser.json())

app.use('/api/qr', qrRoutes)

db.sequelize.sync().then(() => {
    console.log('Database connected')
})

const PORT = process.env.PORT || 3009
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
