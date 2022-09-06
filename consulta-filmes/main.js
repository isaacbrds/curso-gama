fetch(`https://api.tvmaze.com/search/shows?q=rambo`).then(resposta=>{
  // console.log(resposta.json());
  return resposta.json()
}).then(dados =>{
  let tabela = document.createElement('table');
  let cabecalho = document.createElement('thead');
  let corpo = document.createElement('tbody');
  let th = document.createElement('th');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  th.innerHTML = 'Nome do Filme';
  cabecalho.appendChild(th);
  tabela.appendChild(cabecalho);
  tabela.appendChild(corpo)
  
  for (let i = 0 ; i < dados.length; i++){  
    tr = document.createElement('tr');
    td = document.createElement('td');
    corpo.appendChild(tr);
    td.innerHTML = dados[i].show.name
    tr.appendChild(td)
  }
  
  document.getElementById('resposta').appendChild(tabela);
})