"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
function tiempoVuelta(valor) {
    if (valor < 0)
        throw new Error("Los tiempos de vueltas no pueden ser negativos");
    return valor;
}
var vuelta = 0;
var tiempoTotal = 0;
for (var i = 0; i < 4; i++) {
    vuelta = readlineSync.questionInt("Ingrese el tiempo de la vuelta " + (i + 1) + ": ");
    var resultado = void 0;
    try {
        resultado = tiempoVuelta(vuelta);
    }
    catch (error) {
        console.log("Ocurrio un error: " + error.message);
        tiempoTotal = 0;
        vuelta = 0;
        i = 4;
    }
    tiempoTotal += vuelta;
}
var promedio = tiempoTotal / 4;
console.log("El tiempo total es: " + tiempoTotal);
console.log("El promedio por vuelta es: " + promedio);
