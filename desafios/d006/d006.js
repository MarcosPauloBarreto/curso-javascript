var res = window.document.getElementById("res");
var conv = window.document.getElementById("conversao");
var button = window.document.getElementById("botao");

button.addEventListener("click", converter);

function converter() {
  var n = prompt("Digite uma Temperatura em Graus Celsius:");
  var faren = (Number(n) * 1.8 + 32).toFixed(2);
  var kel = (Number(n) + 273).toFixed(2);
  res.innerHTML = `Aqui estão as converções de ${n}°C celsius para: `;

  conv.innerHTML = 
  `<h2> ${kel} K (Kelvin)</h2>
  <h2>${faren} F (Fahrenheit)</h2>`;
 
}
