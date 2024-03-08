function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // function retornarCero(item) {
  //   if(item === 0) return 0;
  // } 
  // var resultaCero = arguments.filter(retornarCero);
  // return resultaCero;
  
  var multiplicarNumeros = function(n1, n2) {
    return n1 * n2;
  } 
  return arguments.reduce(multiplicarNumeros);
}


module.exports = multiplicarArgumentos;
