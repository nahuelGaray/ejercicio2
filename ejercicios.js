// //ejercicio 1
const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
if (numeroRandom % 2 == 0) {
    console.log(numerosRandom, "es par");
}
else{
    console.log(numeroRandom,"no es par");
}

//ejercicio 2
let pal1= "tren";
let pal2= "edificio";
if (pal1.length < pal2.length) {
    console.log(pal2,"tiene mas caracteres");
}
else if (pal1.length > pal2.length) {  
    console.log(pal1,"tiene mas caracteres");
}
else{
    console.log("tienen la misma cantidad de caracteres");
}

//ejercicio 3
let numero = 1;
while (numero <9) {
    let resultado = numero++;
    console.log(resultado, "X 9 =", numero*9)
}
//Ejercicio 4
function multiplica(num1){
    return num1*23;
}

console.log(multiplica(8))

//ejercicio 5

let vacio = [];
for (let i = 0; i < 12; i++) {
    vacio.push(Math.floor((Math.random() * (100 - 1 + 1)) + 1));   
}
console.log(vacio);