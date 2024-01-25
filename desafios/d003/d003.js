var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)

function clicar(){
    
    var N = Number(window.prompt('Digite um número inteiro qualquer'))
 
   window.alert(`Antes de ${N}, temos o número ${N-1}. Depois de ${N}, temos o número ${N+1}`)

}