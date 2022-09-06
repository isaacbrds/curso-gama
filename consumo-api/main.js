fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then((resposta)=>{
  //console.log(resposta.json());
  return resposta.json();
}).then((corpo)=>{
 document.getElementById('valor').innerHTML = 'R$ '+corpo.USDBRL.low; 
})