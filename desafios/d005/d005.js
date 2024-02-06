var res = window.document.getElementById("res");
var bt = document.getElementById("botao");
var conv = window.document.getElementById("conversao");
bt.addEventListener("click", clicar);
function clicar() {
  var m = Number(prompt("Digite uma Distância em metros(m)"));
  var km = (m / 1000).toFixed(3);
  var hm = (m / 100).toFixed(3);
  var dam = (m / 10).toFixed(3);
  var dm = (m * 10);
  var cm = (m * 100);
  var mm = (m * 1000);
  res.innerHTML = `<strong>A distância de ${m} metros, corresponde a ...</strong>`;

conv.innerHTML = `
  <p>${km} quilômetros (km)</p>
  <p>${hm} hectômetro (hm)</p>
  <p>${dam} decâmetro (dam)</p>
  <p>${dm} decímetro (dm)</p>
  <p>${cm} centímetro (cm)</p>
  <p>${mm} milímetro (mm)</p>
  
  `;
}
