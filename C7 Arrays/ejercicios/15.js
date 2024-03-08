function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var elMayor = Math.max(...array);

  for(var i = 0; i < array.length; i++) {
    if (array[i] === elMayor) {
      return i;
    } 
  } return 0;
}

module.exports = encontrarIndiceMayor;
