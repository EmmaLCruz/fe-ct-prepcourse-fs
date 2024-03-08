function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var nuevoArray = []

  for(var i = 0; i < array.length; i++) {
    nuevoArray = nuevoArray.concat(array[i].toUpperCase());
  } return nuevoArray;


}

module.exports = convertirStringAMayusculas;
