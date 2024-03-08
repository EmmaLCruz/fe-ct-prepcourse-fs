function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  // console.log(array)
  // console.log(elemento)
  // console.log(elemento + "," + array);

  
  console.log(elemento.push(array))
  return array;
}
 agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], [12]);

module.exports = agregarItemAlComienzoDelArray;
