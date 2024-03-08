function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumarNumeros = function(n1, n2) {
    return n1 + n2;
  }
  var sumaTotal = resultadosTest.reduce(sumarNumeros);
  var promedioNotas = sumaTotal / resultadosTest.length;
  return promedioNotas;

}

module.exports = promedioResultadosTest;
