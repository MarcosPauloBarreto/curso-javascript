
function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } 
  else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(fsex[0].checked){
        genero = "Homem"
        if(idade >= 1 && idade < 5){
            img.setAttribute('src','imagens/bebe-homem.png')
        } else if(idade < 10) {
            img.setAttribute('src','imagens/criança-homem.png')
        } else if(idade < 24){
            img.setAttribute('src','imagens/jovem-homem.png')
        } else if ( idade < 50){
            img.setAttribute('src','imagens/adulto-homem.png')
        } else {
            img.setAttribute('src','imagens/idoso-homem.png')
        }
        
    } else if(fsex[1].checked){
        genero = "Mulher"
        if(idade >=1 && idade < 5){
            img.setAttribute('src','imagens/bebe-mulher.png')
        } else if(idade < 10){
            img.setAttribute('src','imagens/criança-mulher.png')
        } else if ( idade < 23) {
            img.setAttribute('src','imagens/jovem-mulher.png')
        } else if( idade < 50 ){
            img.setAttribute('src','imagens/adulto-mulher.png')
        } else {
            img.setAttribute('src','imagens/idoso-mulher.png')
        }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
