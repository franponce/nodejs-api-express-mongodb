function saludo(nombre){
    console.log("Hola " + nombre);
}

saludo("Franco");

// ES5 - Variables

var nombre = "Franco";
console.log(nombre);

nombre = "Pablo";
console.log(nombre);

// ES6+ - Variables

const nombre6 = "Luis";
let edad = 35;
console.log(nombre6);
// nombre6 = "Ana"; // Assigment to constant variable. 


// Funciones flecha
// Funciones en ES5

// Constante de años que es un arreglo y queremos que nos devuelva la diferencia en añis entre el año actual y el los del array. 

const years = [2000, 2005, 2008, 20212];

var edad5 = years.map(function(el){
    return 2021 - el;
});

console.log(edad5);

// Funciones en ES6 de tipo flecha
let edad6= years.map((el) => {
    return 202021 - el;
});

console.log(edad6);

// Mismo resutlado y podemos reducir el código más. Cómo solo nos devuelve una sola línea, lo podemos dejar así:

let edad7= years.map(el => 2021 - el);
console.log(edad7);

// Funciones CallBack

// Nos permite recibir otra función como parámetro

function Mensaje(callback){
    console.log("Mensaje antes de la llamada callback.");
}

function Saludo(){
    console.log("Saludo después de la llamada al callback");
}

Mensaje(Saludo);

// Otro ejemplo:

function Sumar(num1, num2, callback){
    let resultado = num1 + num2;
    callback(resultado);
}

function Resultado(res){
    console.log(res);
}

Sumar(5, 8, Resultado);