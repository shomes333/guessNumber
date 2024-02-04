let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto 
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDelUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acercaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó.
        if (numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número secretop");
    asignarTextoElemento('p', "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego() {
    // limpiar caja 
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatori
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


asignarTextoElemento('h1', "Juego del número secretop");
asignarTextoElemento('p', "Indica un número del 1 al 10");

condicionesIniciales();