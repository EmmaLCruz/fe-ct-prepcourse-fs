function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   var numAleatorio = Math.floor(Math.random() * array.length + 1);
   if(array.length === 1) return array[0];
   else return array[numAleatorio];
  
}

module.exports = obtenerElementoAleatorio;
