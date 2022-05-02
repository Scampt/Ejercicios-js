// EJERCICIOS

// Ejercicio 1
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres(){
    let cadena = "Hola me gustan los tacos";
    console.log("El numero de caracteres de la cadena son " + cadena.length);
}

function contarCaracterArreglo(){
    let numeros = [1,2,3,4,5,6,6,7,4,21,41,14,1,341,3]
    console.log("El numero de de caracteres de un arreglo son " + numeros.length);
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

// Ejercicio 5
// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function cadenaInvertida(cadena = ""){
    if (!cadena) {
        console.warn("La cadena esta vacia");
    } else {
        let separarCadena = cadena.split("");
        let invertirArreglo = separarCadena.reverse();
        let unirArreglo = invertirArreglo.join("");
    
        console.info(unirArreglo);
    }
}

const cadenaInvertida2 = (cadena = "") =>
(!cadena) 
    ?console.warn("La cadena esta vacia")
    :console.info(cadena.split("").reverse().join(""));

cadenaInvertida("Hola, soy la cadena 1");
cadenaInvertida2("Hola, soy la cadena 2");


//Ejercicio 6
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const palabraRepetida = (cadena, palabra) => typeof cadena !== "string" || typeof palabra !== "string"? "Tipo de dato invalido":
cadena.match(new RegExp(palabra, "g")).length
console.log(palabraRepetida("hola mundo adios mundo hola hola", "mundo"));





// Ejercicio 7
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (cadena = "") =>
(!cadena)
    ? console.warn("No ingresaste ninguna frase")
    : console.info(cadena.split("").reverse().join(""));
    

palindromo("salas");



// Ejercicio 8
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (cadena, patron) =>
(!cadena)
? console.warn("No ingresaste la cadena")
: (!patron)
    ? console.warn("no ingresaste el patron")
    : console.log(cadena.replace(new RegExp(patron,"ig"),""));

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")