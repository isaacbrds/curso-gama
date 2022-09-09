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
    
    let sql = "update consumidores set nome_consumidor = 'Ana JS' where(nome_consumidor='Ana')"

    conexao.query(sql, function(err, result){
        if(err) throw err;
        console.log(result.affectedRows + 'Registro Modificado');
    })

});