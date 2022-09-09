let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end('Subindo a pagina usando nodejs')
}).listen(3000);