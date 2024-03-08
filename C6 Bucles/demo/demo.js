// una persona que quiere entrar a una discoteca debe tener 18 años
// y ademas tener el ticket de entrada
// si la persona quiere entrar sin el ticket pero es amiga del dueño
// entonces puede entrar

function pasar(edad,ticket,conexiones) {

    var mayor = edad >= 18
    var entrada = ticket
    var amiga = conexiones

    if (mayor === true && entrada === "Si") {
        return "Puede entrar";
    } else if (mayor === true && entrada === "Si" || amiga === true) {
            return "Puede entrar";
        }
    else return "No puede entrar";

}

var resultado = pasar(18, "No" ,true);

console.log(resultado);