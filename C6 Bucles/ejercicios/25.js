function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   // return string === string.split("").reverse().join("");

   var palabra = "";

   for(var i = string.length - 1; i >= 0; i--) {
      palabra = palabra + string[i];
   } return palabra === string;
}

module.exports = esPalindromo;
