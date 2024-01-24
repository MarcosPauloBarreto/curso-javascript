var b = window.document.getElementById('button')
b.addEventListener('click', clicar)

function clicar(){
   var nome = String(window.prompt('Opa! Qual o seu Nome?'))
   var idade = Number(window.prompt(`Olá ${nome}! Quantos anos você tem?`))

   window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade! `)
    
}