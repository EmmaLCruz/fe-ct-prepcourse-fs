function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  var potencia = Math.pow(2,numero);
  // var i = 1;

  while (potencia % numero === 0) {
    // i = i + 1;
    return true;
  } return false;

}

module.exports = esPotenciaDeDos;
