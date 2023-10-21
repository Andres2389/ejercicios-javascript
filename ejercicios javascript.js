/*este es el primer ejercicio*/
let edad = parseInt(prompt("digita tu edad"));
if (edad>=18){
    console.log("eres mayor de edad");
} else{
    console.log("no eres mayor de edad");
}

/*este es el segundo ejercicio*/
let nota1=parseFloat(prompt("digita tu primer nota"));
let nota2=parseFloat(prompt("digita tu segunda nota"));
let nota3=parseFloat(prompt("digita tu tercer nota"));
let promedio=(nota1+nota2+nota3/3)
if (promedio>=6){
    console.log("aprobado el curso");
} else{
    console.log("reprobado el curso");
}
/*este es el tercer ejercicio*/
let numberA=parseFloat(prompt("digita primer numero"));
let numberB=parseFloat(prompt("digita segundo numero"));
if (numberA > numberB){
    console.log("el numero A es mayor");
}
else if (numberA<numberB){
    console.log("numero A es menor ");
} else{
    console.log("A es igual que B");
}
 /* este el quinto ejercicio*/
 let persona=parseFloat(prompt("digita su peso en kilogramos"));
 if (persona<=40 ){
    console.log("persona baja de peso");
 } else if (persona>=41 && persona<=70){
    console.log("persona promedio");
 }else{
    console.log("persona con sobrepeso")
 }
/*este es el sexto ejercicio*/

function obtenerDiaSemana(numero) {
    switch (numero) {
      case 1:
        return "LUNES";
      case 2:
        return "MARTES";
      case 3:
        return "MIÉRCOLES";
      case 4:
        return "JUEVES";
      case 5:
        return "VIERNES";
      case 6:
        return "SÁBADO";
      case 7:
        return "DOMINGO";
      default:
        return "ESCRIBISTE UN NÚMERO FUERA DEL RANGO. ESCRIBE UN NÚMERO ENTRE 1 Y 7";
    }
}
obtenerDiaSemana(5);

/* es el septimo ejercicio*/

let  compra=parseFloat(prompt("digita su compra"));
let descuento1= compra*0.8;
let descuento2= compra*0.95;
if (compra>=1000){
    console.log("su compra final es "+descuento1);
}else{
    console.log("su compra final  es "+descuento2);
}
/*este es el ocho ejercicio*/

