function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  function mostrarPares(item) {
    if(item % 2 === 0) return item;
  }

  var numeroPar = array.filter(mostrarPares);
  return numeroPar;
  
}

module.exports = filtrarNumerosPares;
