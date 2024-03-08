
// var arreglo1 = [1, 234754, 29573, 35675, 434];
// var arreglo2 = [];
// var arreglo3 = [1, "234754", , , , true, 35675, 434, "string"];
// var arreglo4 = ["Numero 1", [1, 2, 3, 4, 6, 7, 8, 9, 10], ["1", true, [1, 2, 3, 4]]];

// arreglo1[12] = "Cambié el valor de esta posición"

// console.log(arreglo1);


// console.log(arreglo4[2][2][1]);

// for (var i = 0; i < arreglo4.length; i++) {
//     if(Array.isArray(arreglo4[i])) {
//         for(var j = 0; j < arreglo4[i].length; j++) {
//             console.log(arreglo4[i][j]);
//         }
//     }
// }

// for (var i = 0; i < arreglo4.length; i++) {
//     if(Array.isArray(arreglo4[i])) {
//         for(var j = 0; j < arreglo4[i].length; j++) {
//             if(Array.isArray(arreglo4[i][j])) {
//                 for(var k = 0; k < arreglo4[i][j].length; k++) {
//                     console.log(arreglo4[i][j][k]);
//                 }
//             }
//         }
//     }
// }
    
    // console.log(arreglo4[i]);

// for (var i = 0; i < arreglo1.length; i++) {
//     console.log(arreglo1[i] * 5);
// }

// for (var i = arreglo4.length - 1; i >= 0; i--) {
//     console.log(arreglo4[i]);
// }

// var palabra = "palabras sin sentido";

// for (var i = palabra.length - 1; i >= 0; i--) {
//          console.log(palabra[i]);

// for (let i = 0; i < palabra.length; i++) {
//     console.log(palabra[i]);
    
// }

// var arreglo1 = [1, 2, 3, 4, 5, 6, 7];

// console.log("Antes del push", arreglo1);
// arreglo1.push("ocho");
// console.log("Despues del push", arreglo1);


// console.log("Antes del pop", arreglo1);
// var valor1 = arreglo1.pop();
// var valor2 = arreglo1.pop();
// var valor3 = arreglo1.pop();
// console.log("Esto es lo que eliminó el pop:", valor1);
// console.log("Esto es lo que eliminó el pop:", valor2);
// console.log("Esto es lo que eliminó el pop:", valor3);
// console.log("Despues del pop", arreglo1);

// console.log("Antes del unshift", arreglo1);
// var valor = arreglo1.unshift(8, 9, 10, 11);
// console.log("Esto es lo que agregó el unshift:", valor);
// console.log("Despues del unshift", arreglo1);

// console.log("Antes del shift", arreglo1);
// var valor = arreglo1.shift();
// console.log("Esto es lo que eliminó el shift:", valor);
// console.log("Despues del shift", arreglo1);

var arreglo1 = [1, 2, 3, 4, 5, 6, 7];

function mostrarElementos(item) {
    if (item < 5) return item;
}
var resultado = arreglo1.filter(mostrarElementos);
console.log(arreglo1);
console.log(resultado);

// function mostrarElementos(elemento) {
//     console.log(elemento + 1);
// }
// arreglo1.forEach(mostrarElementos);


// function suma(a, b) {
//     return a + b;
// }
// function resta(a, b) {
//     return a - b;
// }
// function operaciones(sdf) {
//     var resultado = sdf(5, 1);
//     return resultado;
// }
// var resultadoOperacion = operaciones(resta);
// console.log(resultadoOperacion);

