const express = require('express');
const db = require('./database');
const Aluno = require('./models/Aluno');

const app = express();

app.use(express.json())

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/index.html');
});


app.get('/alunos', async(req, res) => {
  try{
    const alunos = await Aluno.findAll();
    res.status(200).json(alunos)
  }catch(error){
    if(error instanceof Error){
      res.status(400).json({message: error.message})
    }
  }
  
})

app.post('/alunos', async(req, res) => {
  const {nome, email, idade, genero, telefone, estudante } = req.body;

  try{
    const aluno = await Aluno.create({
      nome,
      email,
      idade,
      genero,
      telefone,
      estudante
    });
    res.status(201).json(aluno)
  }catch(error){
    if(error instanceof Error){
      res.status(400).json({message: error.message})
    }
  }
})

db.sync(()=>{
  console.log('Banco de dados conectado')
})
app.listen(3000, (req, res) => {
  console.log('Servidor Online')
})