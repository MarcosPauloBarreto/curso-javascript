var button = window.document.getElementById("botao");
var res = window.document.getElementById("res");
var conv = window.document.getElementById("conversao");

button.addEventListener("click", calculo);
function calculo() {
  var produto = prompt("Qual é o produto que você está comprando?");
  var v = prompt(`Qual o preço do ${produto}`);
  
  var p = Number(v).toLocaleString("pt-BR", {
    style: `currency`,
    currency: `BRL`,
  });

  var d = (v * 0.1).toLocaleString("pt-BR", {
    style: `currency`,
    currency: `BRL`,
  });

  var r = (v - v * 0.1).toLocaleString("pt-BR", {
    style: `currency`,
    currency: `BRL`,
  });

  res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`;

  conv.innerHTML = `
  <p> O preço original era ${p}.</p>
  <p> Você acaba de ganhar ${d} de desconto (-10%)</p>
  <p> No fim, você vai pagar ${r} no produto ${produto}</p>
  `;
}
