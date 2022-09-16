const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({ 
  dialect: 'sqlite',
  storage: './tmp/banco.sqlite'
});

module.exports = sequelize;