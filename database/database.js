const Sequelize = require("sequelize")
const connection = new Sequelize("crud", "rdr", "12345678", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = {connection, Sequelize}