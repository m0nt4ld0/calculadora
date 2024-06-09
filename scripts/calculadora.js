/*
* ========================================================================================
*  Nombre del archivo: calculadora.js
*  Autor: Mariela Montaldo
*  Fecha de creación: 07/06/2024
*  Última modificación: 09/06/2024
*  Versión: v0.1
*
*  Descripción:
*  Sencilla calculadora realizada con Javascript.
*
*  Historial de modificaciones:
*  - 07/06/2024: Mariela Montaldo - Creación del archivo.
*
*  Copyright (c) 2024 Mariela Montaldo.
*
*  Licencia:
*  Este código está licenciado bajo la GPL-2.0. Para más información, 
*  consulte el archivo LICENSE adjunto en el directorio raíz del proyecto o visite 
*  https://fsf.org/.
*
* ========================================================================================
*/

/* ===== Definiciones de variables y constantes ===== */
const VALORES = document.querySelectorAll('.btn-valor');
const OPERACIONES = document.querySelectorAll('.btn-operacion');
const VISOR = document.getElementById('visor');

let gFlag = 0;
let gNumbers = [0, 0];
let gOperacion = '';

/* ===== Eventos ===== */

VALORES.forEach(valor => {
    valor.addEventListener('click', () => {
        VISOR.value += valor.value;
        gNumbers[gFlag] = parseInt(VISOR.value);
    });
});

OPERACIONES.forEach(operacion => {
    operacion.addEventListener('click', () => {
        VISOR.value = '';
        if(operacion.value == "=") {
            calcular();
            gFlag = 0;
        }
        if(operacion.value != ",") {
            gFlag = 1;
            gOperacion = operacion.value;
        }
        if(operacion.value == "AC") {
            limpiar();
        }
        if(operacion.value == "+/-") {
            cambiarSigno();
        }
    });
});

/* ===== Funciones ===== */

function calcular() {
    let rdo = 0;
    switch(gOperacion) {
        case "+":
            rdo = (gNumbers[0] + gNumbers[1]);
            break;
        case "x":
            rdo = (gNumbers[0] * gNumbers[1]);
            break;
        case "-":
            rdo = (gNumbers[0] - gNumbers[1]);
            break;
        case "/":
            rdo = (gNumbers[0] / gNumbers[1]);
        break;
        
    }
    VISOR.value = rdo;
    gNumbers = [rdo, 0];
    gFlag = 1;
}

function limpiar() {
    VISOR.value='';
    gNumbers = [0, 0];
    gFlag = 0;
    gOperacion = '';
}

function cambiarSigno() {
    //console.log("VISOR.value: " + VISOR.value+ " ,gNumbers[0] " + gNumbers[0] + ", gNumbers[1] " + gNumbers[1]);
    let aux = parseInt(VISOR.value);
    //console.log("aux antes: " + aux);
    aux*=(-1);
    //console.log("aux desp: " + aux);
    VISOR.value=aux;
}