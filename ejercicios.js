// EJERCICIOS

// Ejercicio 1
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres(){
    let cadena = "Hola me gustan los tacos";
    console.log(cadena.length);
}

function contarCaracterArreglo(){
    let numeros = [1,2,3,4,5,6,6,7,4,21,41,14,1,341,3]
    console.log(numeros.length);
}

function contarCaracterObjeto(){
    let usuario = {
        nombre: "Jose",
        apellido: "Torres",
        edad: 23
    };
    console.log("El nombre " + usuario.nombre + " tiene " + usuario.nombre.length + " Caracteres");
    console.log("El apellido "+ usuario.apellido + " tiene " + usuario.apellido.length);
    console.log("El usuario "+ usuario.nombre + " tiene " + usuario.edad + " años");
}

contarCaracteres()

contarCaracterArreglo()

contarCaracterObjeto();

// Ejercicio 2
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortarTexto() {
    let cadena = "Hola Mundo";
    let cadenaCaracter = cadena.slice(0,4);

    console.log(cadenaCaracter);
}

recortarTexto();

// Ejercicio 3
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function arraySeparado (){
    let string = "Hola que tal soy un string que sera convertido en un array de texto separado";

    console.log(string.split([""]));
}

arraySeparado();

// Ejercicio 4
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function saludar(){
    let saludo = "Hola, soy Kevin ";
    
    console.log(saludo.repeat(3));
}

saludar();