//let curso = "Javascript-flex"
//let comision = 90600
//let tutor = false





//console.log("materia: "+curso+" comision n°" +comision)

//let numeroA = parseInt(prompt("Ingrese el primer numero"))
//let numeroB = parseInt(prompt("Ingrese el segundo numero"))

//let resultado = numeroA + numeroB
//console.log(resultado)

//Funciones

function saludar(nombre) {
    console.log("Hola " + nombre)
}

saludar("Profe");

//ciclos por repeticion

for(let i = 0; i<5; i++) {
    console.log("Bienvenidos a mi proyecto de SUP");
}

//ciclos condiconales

const password = 1981

let passwordingresado = prompt("Ingrese su contraseña");

while(passwordingresado != password) {
    passwordingresado = prompt("Ingrese su contraseña");
}


//Condicional 

let edad = 18;

if(edad >= 18) {
    console.log("Estas listo para comprar en la pagina");
} else {
    console.log("Debes ser mayor de edad para ingresar");
}

//Funciones con parametros

function agregartablasSup(Modelo, medida) {
    return { Modelo, medida };
}

function mostrardetalletablasSup(tablasSup) {
    console.log(`Modelo: ${tablasSup.Modelo}, Medida: ${tablasSup.medida}`);
}

let tablasSup = agregartablasSup("Allround", "10p6");

mostrardetalletablasSup(tablasSup);

//arrays

let tablas = ["Allround", "SupSurf", "Turing", "Race"]
 
console.log(tablas);

console.log(tablas[0])

alert("Gracias por entrar a nuestra página");