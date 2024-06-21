// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do desafio';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 1 a 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let mensagemTentativas;

    function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }

    function exibirMensagemInicial(){
        exibirTextoNaTela('h1', 'Hora do desafio');
        exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroLimite}`);
    }

    exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';

    if (chute == numeroSecreto) {
        mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);

        let reiniciar = document.getElementById('reiniciar');
        reiniciar.removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {    
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}