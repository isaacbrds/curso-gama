var cep = '';
function buscaCep(){
  
  cep += document.getElementById('inputCep').value;
  
  fetch(`https://api.postmon.com.br/v1/cep/${cep}`).then(resposta=>{
   return resposta.json()
  }).then(dados=>{
     document.getElementById('endereco').value = dados.logradouro
     document.getElementById('bairro').value = dados.bairro
     document.getElementById('cep').value = dados.cep
     document.getElementById('estado').value = dados.estado
     document.getElementById('cidade').value = dados.cidade
  })

}


function limpaCampos(){
  document.getElementById('nomeCliente').value = '';
  document.getElementById('inputCep').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cep').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('cidade').value = '';

}
