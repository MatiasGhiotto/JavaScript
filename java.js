let cantidad = prompt("Cantidad que desea comprar?");
let precio = 40;
let total = cantidad * precio;
console.log("Total a pagar " + total +" pesos ");

if (total>= 200){
    alert("No tiene cargo en el envio!")
}else if (total <200){
    alert("Cuenta con recargo en el envio!")
}

