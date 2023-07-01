// Sortear numero;
const maiorValor = 1000;
const menorValor = 1;
const numSecreto = geraNum();

const elementoMenor = document.getElementById("valor_menor");
elementoMenor.innerHTML = menorValor;
const elementoMaior = document.getElementById("valor_maior");
elementoMaior.innerHTML = maiorValor;

function geraNum() {
  return parseInt(Math.random() * maiorValor + 1);
}
console.log(numSecreto)