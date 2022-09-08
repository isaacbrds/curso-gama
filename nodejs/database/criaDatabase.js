let mysql = require('mysql2');

let conexao = mysql.createConnection({
    host: "localhost",
    user: "isaac",
    password: "123"
});

conexao.connect(function(err){
    if(err) throw err;

    console.log('conectado!');

    conexao.query("create database nodejs", function(err, result){
        if(err) throw err
        console.log('Database criado!')
    });
})