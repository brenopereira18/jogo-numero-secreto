function verificaSeValorEValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>";
        return;
    } if (numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: o valor precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    } if (numero === numeroSorteado) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número sorteado era ${numeroSorteado}</h3> 
            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>       
        `        
    } if (numeroSorteado > numero) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    } else if (numeroSorteado < numero) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }

}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener("click", (event) => { 
    if (event.target.id == "jogar-novamente") {
        window.location.reload();  // recarrega a pagina e reinicia o jogo
    }
})
