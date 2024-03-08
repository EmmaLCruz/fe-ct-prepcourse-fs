function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:

   // var lenguaje = texto;
   // return lenguaje = texto.split("").reverse().join("");


   acumulador = "";

   for(var i = texto.length - 1; i >= 0; i--) {
      acumulador = acumulador + texto[i];
   } return acumulador;
}

module.exports = invertirTexto;
