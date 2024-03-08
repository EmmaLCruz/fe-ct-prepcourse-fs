function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  // return array.reverse();

  var acumulador = []

  for(var i = array.length -1; i >= 0; i--) {
    acumulador = acumulador.concat(array[i]);
    
  } return acumulador;
}

module.exports = invertirArray;
