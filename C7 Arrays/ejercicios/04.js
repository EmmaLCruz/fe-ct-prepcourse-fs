function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  console.log(array)
  console.log(elemento)

  console.log(array.push(elemento))

  let resultado = array.push(elemento);
  var resultado = array;
  console.log(array);

  return array;

}

module.exports = agregarItemAlFinalDelArray;

agregarItemAlFinalDelArray([12, 18, 15], "hola");