function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var sumarNumeros = function(n1, n2) {
    return n1 + n2;
  }
  return arrayOfNums.reduce(sumarNumeros);
}

module.exports = agregarNumeros;
