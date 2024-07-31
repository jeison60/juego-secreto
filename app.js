

//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'indica un numero del 1 al 10';

let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarintento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

 if (numeroDeUsuario === numeroSecreto) {

        asignarTextoElemento('p', `Acertaste al numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if (numeroDeUsuario > numeroSecreto) {

            asignarTextoElemento('p', 'el numero secreto es menor');

        } else {

            asignarTextoElemento('p', 'el numero secreto es mayor')
        }

        intentos++;
        limpiarcaja()
    }

    return;
}

function limpiarcaja(){

document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
   let numerogenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numerogenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p' , 'ya se sortearon todos los numeros posibles')
    }else{

    if (listaNumerosSorteados.includes(numerogenerado)) {
        return generarNumeroSecreto();
        
} else {
    listaNumerosSorteados.push(numerogenerado);
    return numerogenerado;

    }
    } 
}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarjuego(){

    limpiarcaja();
    condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled' , 'true' );

}

condicionesIniciales()

