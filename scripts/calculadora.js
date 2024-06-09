
const VALORES = document.querySelectorAll('.btn-valor');
const OPERACIONES = document.querySelectorAll('.btn-operacion');
const VISOR = document.getElementById('visor');

let gFlag = 0;
let gNumbers = [0, 0];
let gOperacion = '';

VALORES.forEach(valor => {
    valor.addEventListener('click', () => {
        gNumbers[gFlag] += parseInt(valor.value);
        VISOR.value = '';
        VISOR.value = gNumbers[gFlag] ;
    });
});

OPERACIONES.forEach(operacion => {
    operacion.addEventListener('click', () => {
        VISOR.value = '';
        if(operacion.value == "=" || gFlag > 0) {
            gFlag = 0;
            calcular();
        }
        if(operacion.value != ",") {
            gFlag++;
            gOperacion = operacion.value;
        }
    });
});

function calcular() {
    switch(gOperacion) {
        case "+":
            VISOR.value = parseInt(gNumbers[0]) + parseInt(gNumbers[1]);
            break;
        case "-":
            VISOR.value = gNumbers[0] - gNumbers[1];
            break;
    }
    gNumbers = [parseInt(VISOR.value), 0];
    gFlag = 1;
}