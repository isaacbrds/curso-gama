let mysql = require('mysql2');

let conexao = mysql.createConnection({
    host: "localhost",
    user: "isaac",
    password: "123",
    database: 'nodejs'
});

conexao.connect(function(err){
    if(err) throw err;

    console.log('conectado!');
    let sql = "create table consumidores (nome_consumidor varchar(50), endereco varchar(100))";
    conexao.query(sql, function(err, result){
        if(err) throw err;
        console.log('Tabela criada com sucesso!')
    })
});