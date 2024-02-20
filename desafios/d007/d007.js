var button = window.document.querySelector("input#botao");
var res = window.document.querySelector("div#res");
var conv = window.document.getElementById("conversao");

button.addEventListener("click", clicar);
function clicar() {
  var c = Number(prompt("Diga a cotação do dolar atual:"));
  var n = Number(prompt("Diga o valor em R$ que você tem na sua carteira:"));
  var R = (n / c).toLocaleString("en-US", {
      style: `currency`,
      currency: `USD`,
    });
    
    res.innerHTML = `<h2>Este é o valor de R$${n} em Dolar US$:</h2> `;
    conv.innerHTML = `<p> ${R} dolares (US$) </p>`
}
