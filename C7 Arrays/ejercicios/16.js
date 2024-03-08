function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var mutiplicador = [];

  for(var i = 0; i < array.length; i++) {
    mutiplicador = mutiplicador.concat(array[i] * i);
  } return mutiplicador;
}

module.exports = multiplicarElementosPorIndice;
