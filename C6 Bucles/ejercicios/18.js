function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

if (a <= 0) return 0;
var contador = 1

for (let i = a; i <= b; i++) {
  contador = contador * i;
  
} return contador;
  
  
}
module.exports = productoEntreNúmeros;