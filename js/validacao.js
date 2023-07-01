function verificaValor(chute) {
  const numero = +chute;

  if (numInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
    return;
  }
  if (numForaDoPadrao(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div`;
    return;
  }
  if (numero === numSecreto) {
    document.body.innerHTML = `
        <h2> Parabéns! Você acertou! </h2>
        <h3 class="texto"> O número secreto era: ${numSecreto} </h3> 
        <button id = "jogar" class= "btn-jogar"> Jogar novamente</button>
        `;
  } else if (numero < numSecreto) {
    elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
  } else  {
    elementoChute.innerHTML +=
      ` <div>O numero secreto é menor<i class="fa-solid fa-arrow-down"></i></div>`;
  }
}

function numInvalido(numero) {
  return Number.isNaN(numero);
}
function numForaDoPadrao(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
    if(e.target.id =="jogar"){
        window.location.reload()
    }
})