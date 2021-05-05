const {connection, Sequelize} = require("../database/database");

const User = connection.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.sync({force: false})

module.exports = User