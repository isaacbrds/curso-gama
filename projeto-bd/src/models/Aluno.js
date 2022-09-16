const Sequelize = require('sequelize');
const database = require('../database');

const Aluno = database.define('aluno',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false
  },
  idade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  estudante:{
    type: Sequelize.BOOLEAN,
  }
})

module.exports = Aluno;