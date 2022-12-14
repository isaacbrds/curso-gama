let guardaHistorico = [];

function inserir(num){
  let valor = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = valor + num;

  switch(num) {
    case ".":
      desativaVirgula();
      break;
    case "+":
      ativaVirgula();
      break;
    case "-":
      ativaVirgula();
      break;
    case "*":
      ativaVirgula();
      break;
    case "/":
      ativaVirgula();
      break;
  }
}

function ativaVirgula(){
  document.getElementById('btn-virgula').removeAttribute('disabled', 'disabled');
}

function desativaVirgula(){
  document.getElementById('btn-virgula').setAttribute('disabled', 'disabled');
}

function calculaResultado(){
  let expressao = document.getElementById('display').innerHTML;
  let resultado = eval(expressao);
  
  guardaHistorico.push(`${expressao} = ${resultado}`);
  document.getElementById('display').innerHTML = resultado.toFixed(2);
}

function limpaDisplay(){
  document.getElementById('display').innerHTML = '';
  ativaVirgula()
}

function apagaCaracter(){
  let valor = document.getElementById('display').innerHTML;
  let resultado = '';
  for (let i = 0; i < valor.length - 1; i++){
    resultado += valor.charAt(i)
  }
  document.getElementById('display').innerHTML = resultado;
  ativaVirgula()
}

function historico(){
  let resultado = '';
  if(guardaHistorico.length > 1){
    resultado += guardaHistorico[guardaHistorico.length - 1] + '<br>' + guardaHistorico[guardaHistorico.length - 2] + '<br>';
    document.getElementById('display').innerHTML = resultado;
    salvar()
  }
}

function salvar(){
  let texto = ''

  for (let i = 0; i < guardaHistorico.length; i++){
    texto += guardaHistorico[i] + "\n";
  }
  
  let blob = new Blob([texto],
  {
      type:"text/plain;charset=utf-8"

  });
  saveAs(blob,"financeiro.txt");
}