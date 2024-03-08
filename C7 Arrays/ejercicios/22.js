function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var acumulador = [6];

  for(var i = 0; i < 10; i++) {
    acumulador = acumulador.concat(acumulador * [i]);
  } return acumulador;
  
}

module.exports = tablaDelSeis;
