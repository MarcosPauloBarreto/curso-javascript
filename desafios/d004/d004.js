var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)


function clicar(){
    
    var Produto = window.prompt('Que produto voçê está Comprando?')

    var Preço = window.prompt(`Quanto custa ${Produto} que voçê está comprando?`)

    var Valor = window.prompt(`Qual foi o valor que voçê deu para pagar ${Produto}`)

    var R = Number(Valor) - Number(Preço)

    window.alert(`Voçê comprou ${Produto} que custou R$${Preço},00. Deu R$${Valor},00  em dinheiro e vai receber R$${R},00 de troco. Volte Sempre!`)
}