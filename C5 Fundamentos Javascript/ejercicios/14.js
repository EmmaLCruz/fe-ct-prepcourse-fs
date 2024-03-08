function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

  var uno = str1.length
  var dos = str2.length
  
  if (uno === dos) return true;
  else return false;
}

module.exports = tienenMismaLongitud;