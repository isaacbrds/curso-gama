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
    let sql = "insert into consumidores values('Isaac', 'Nossa Senhora de Fatima, 221')";
    conexao.query(sql, function(err, result){
        if(err) throw err;
        console.log('Inserindo dados com sucesso!')
    })
});