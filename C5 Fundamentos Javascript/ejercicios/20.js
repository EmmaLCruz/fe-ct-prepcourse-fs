function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  
  var correcto = "Es vocal"
  var incorrecto = "Dato incorrecto"

  if (letra.length !== 1) return incorrecto;
  else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') return correcto;
  else return incorrecto;
}

module.exports = esVocal;
