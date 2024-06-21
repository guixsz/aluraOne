function imc(altura, peso) {
    let imc = peso / (altura^2);
    return imc;
}

function conversao(valor) {
    valorDolar = valor / 5.44;
    return valorDolar;
}

function tabuada(numero){
    i = 0;
    while(i <= 10) {
        let valor = numero * i;
        console.log(`${numero} X ${i} = ${valor}`);
        i++;
    }
}

console.log(`O valor em dolar é ${conversao(10)}`);
console.log(`O seu IMC é: ${imc(1.74, 78.0)}`);
tabuada(2);