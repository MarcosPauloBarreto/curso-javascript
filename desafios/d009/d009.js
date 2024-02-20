
var button = window.document.getElementById('button')
var conv = window.document.getElementById('conversao')
var res = window.document.getElementById('res')

button.addEventListener('click',calculo)

function calculo(){
    var nome = prompt('Qual é o nome do funcionário')
    var salario = prompt(`Qual o salário de ${nome}`)
}