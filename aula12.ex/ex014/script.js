function carregar(){// DOIS OBJETOS:
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas `
    if ( hora >= 0 && hora < 12 ){
        msg.innerHTML += `Bom Dia!`
        img.src = "imagens/amanhecer.png" 
        window.document.body.style.backgroundColor = "#ffbd46"
    }
    else if( hora >= 12 && hora <= 18){
        msg.innerHTML += `Boa Tarde!`
        img.src = "imagens/tarde.png"
        window.document.body.style.backgroundColor = "#dc5302"
    }
    else {
        msg.innerHTML += `Boa Noite!`
        img.src = "imagens/noite.png"
        window.document.body.style.backgroundColor = "#0d353f"
        
    }
}