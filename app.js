let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemeto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //el parseInt convierte un numero con tipo de dato string a numero
    //al quitar el parseInt y el typeof el programa sigue funcionando normal
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    //el typeof fuerza a que el valor de numero de usuario se lea como un string
    //console.log(typeof(numeroDeUsuario));
    //la linea de codigo siguiente permite ver desde consola el numero secreto que se esta generando
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    // el triple igual === nos compara el valor y el tipo de dato
    //console.log(numeroDeUsuario == numeroSecreto);
    //la siguiente linea de codigo solo muestra por consola los intentos que se han hecho
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        //el segundo dolar de la linea de codigo siguiente encierra unoperador ternario
        asignarTextoElemeto('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemeto('p', 'El numero es menor');
        }else{
            asignarTextoElemeto('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el nuemro generado esta dentro de la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemeto('p', 'ya se sortearon todos los numeros posibles')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

/*
function generarNumeroSecreto(){
    return  Math.floor(Math.random()*10)+1;
}
*/

function condicionesIniciales(){
    asignarTextoElemeto('h1', 'Juego del numero secreto!');
    asignarTextoElemeto('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //desabilitar el boton de nuevo juego
    condicionesIniciales();
    //inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesIniciales();