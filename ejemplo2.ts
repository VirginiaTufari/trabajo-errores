// Sumar los elementos de un arreglo

class CustomError extends Error {
    public constructor (mensage:string) {
        super (mensage);
        this.name="ErrorValidación";
    }
}

let numeros : number[]=[];
let resultado : number;

function sumaNumeros(arreglo:number[]) :number {
    if (arreglo.length==0){
        throw new CustomError("No se puede sumar un arreglo vacio");
    }
    let suma : number =0
    for (let i:number = 0; i<arreglo.length; i++) {
        suma += arreglo[i];
}
return suma;
}
try {
    resultado = sumaNumeros(numeros);
    console.log(resultado);

} catch(error){
    console.log ("Dato invalido: "+ error.message);
}