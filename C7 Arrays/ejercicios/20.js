function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  // function callBack(n1, n2) {
  //   return n1 !== n2;
  // }
  // return array.every(callBack);

  var compararNumeros = function(n1, n2) {
    return n1 === n2 && n1 !== n2;
  }
  var comparativa = array.every(compararNumeros);
  return comparativa;
}

module.exports = todosIguales;
