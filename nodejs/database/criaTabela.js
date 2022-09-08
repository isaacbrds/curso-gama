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

});