function convertToFarenheit(value){
    return (value - 32 ) * 5 / 9
}

console.log(`O valor em farenheit é: ${convertToFarenheit(100)}`);


const entrada =  document.getElementById('input-todo')
const botao = document.getElementById('btn-adiciona')
let lista = document.getElementById('lista-tarefas');

botao.addEventListener('click', function(evento){
    evento.preventDefault();
    const item = document.createElement('li')
    item.innerText = entrada.value
    lista.appendChild(item)
    entrada.value = ''
})

