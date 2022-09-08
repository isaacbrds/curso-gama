let livro = function(nomeLivro, quantidadeLivro, valorUnitarioLivro){
  return `O livro ${nomeLivro} vendeu R$ ${quantidadeLivro * valorUnitarioLivro}`
}

module.exports = livro;