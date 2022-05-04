// PRACTICA
let operacion = prompt("Que operacion quiere realizar? \n 1: sumar \n2: restar \3: multiplicar \n4: dividir")
let numeroUno = parseInt(prompt("primer numero"));
let numeroDos = parseInt(prompt("segundo numero"));

if((operacion == 1) || (operacion == "sumar")){
    alert(numeroUno + numeroDos)
}
else if ((operacion == 2) ||  (operacion == "restar")) {
    alert(numeroUno - numeroDos) 
}
else if(( operacion = 3) || (operacion == "multiplicar")){
    alert( numeroUno * numeroDos)
}
else if ((operacion== 4) || (operacion == "dividir")){
    alert( numeroUno / numeroDos)
}
else {
    alert("no se encontro la operacion")
}