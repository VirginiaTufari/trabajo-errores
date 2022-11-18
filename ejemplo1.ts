// •En una prueba, un piloto tiene que completar 4 vueltas
// •Se necesita un programa que permita ingresar por
//  teclado el tiempo de cada vuelta
// •El programa debe retornar el tiempo total y el promedio de vuelta

import * as readlineSync from 'readline-sync';

function tiempoVuelta (valor:number):number{
    if (valor<0)
        throw new Error ("Los tiempos de vueltas no pueden ser negativos");
        
    return valor   
}

let vuelta :number = 0;
let tiempoTotal :number=0;
for (let i:number=0; i<4;i++){
 vuelta= readlineSync.questionInt("Ingrese el tiempo de la vuelta "+(i+1)+": ");
 let resultado : number;
 try {
    resultado = tiempoVuelta(vuelta);
 } catch (error) {
    console.log ("Ocurrio un error: "+ error.message)
    tiempoTotal = 0;
    vuelta=0;
    i=4;
 }
 tiempoTotal += vuelta;
}
let promedio:number = tiempoTotal/4;
console.log("El tiempo total es: "+tiempoTotal);
console.log("El promedio por vuelta es: "+promedio);