const elementoChute =document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak); 

function onSpeak(event) {
    chute = event.results[0][0].transcript; // reuslts retorna um objeto que representa todos os resultados do reconhecimento de fala.
    exibeChuteNaTela(chute);
    verificaSeValorEValido(chute);
}

function exibeChuteNaTela(chute) {    
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener("end", () => recognition.start()) // quando o jogo termina, ele recomeça