function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:

  // switch (num) {
  //   case 10:
  //     return true;
  //   case 5:
  //     return true;  
  //   default:
  //     return false;
  //     break;
  // }

  if(num === 10 || num === 5) return true;
  else return false;
}

module.exports = esDiezOCinco;
