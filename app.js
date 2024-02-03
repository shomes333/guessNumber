let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);
let intentos = 1;

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

asignarTextoElemento('h1', "Juego del número secretop");
asignarTextoElemento('p', "Indica un número del 1 al 10");