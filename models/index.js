const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Person = require('./Person')(sequelize, Sequelize.DataTypes)

module.exports = db
