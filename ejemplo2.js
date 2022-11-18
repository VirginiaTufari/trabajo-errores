// Sumar los elementos de un arreglo
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(mensage) {
        var _this = _super.call(this, mensage) || this;
        _this.name = "ErrorValidación";
        return _this;
    }
    return CustomError;
}(Error));
var numeros = [];
var resultado;
function sumaNumeros(arreglo) {
    if (arreglo.length == 0) {
        throw new CustomError("No se puede sumar un arreglo vacio");
    }
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
try {
    resultado = sumaNumeros(numeros);
    console.log(resultado);
}
catch (error) {
    console.log("Dato invalido: " + error.message);
}
