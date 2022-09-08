let mysql = require('mysql2');

const consumidores = [
    {
        nome: 'Rita',
        endereco: 'Rua Fabia, 1000'
    },
    {
        nome: 'Ana',
        endereco: 'Rua Catão, 902'
    },
    {
        nome: 'Nicole',
        endereco: 'Rua Talipas, 9200'
    },
]

let conexao = mysql.createConnection({
    host: "localhost",
    user: "isaac",
    password: "123",
    database: 'nodejs'
});

conexao.connect(function(err){
    if(err) throw err;

    console.log('conectado!');
    for(let i=0; i<consumidores.length; i++){
        let sql = `insert into consumidores values('${consumidores[i].nome}', '${consumidores[i].endereco}')`;
            conexao.query(sql, function(err, result){
                if(err) throw err;
                console.log('Inserindo dados com sucesso!')
            })
    }
    
});