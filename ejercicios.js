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

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroRandom = console.log(Math.round(Math.random() * (500 - 600 + 1)) + 500);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true

const esCapicua = (number) => {
    if(typeof number !== typeof 5){
        console.warn("No ingresaste un numero");
    }else{
        let inverso = Number(number.toString().split("").reverse().join(""));

        (number !== inverso)
        ? console.log(`El numero ${number} no es capicúa`):console.log(`El numero  ${number} es capicúa`); 
    }          
}

esCapicua(30303)
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function Factorial(n) {
    if (n === "") {
        console.warn("No puedes escribir strings, solo números");
    } else {
        let total = 1;
        for (let i = 1; i <= n; i++) {
            total *= i
        }
        console.info(total);
    }
}

Factorial(5);
Factorial(10);


// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function esPrimo(numero) {
    if (numero == undefined) {
        console.warn("No ingresaste ningun dato");
    }
    else if (numero == "") {
        console.warn("Por favor ingresa un valor numerico");
    }
    else {
        let esDivisible = false

        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                esDivisible = true;
                break;
            }
        }
            if (esDivisible) {
                return console.log("El numero NO es primo")
            } else {
                return console.log("El numero SI es primo")
            }
        }
    }

// esPrimo()
// esPrimo("")
// esPrimo(7)



// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function esParImpar (numero) {
    if (numero == undefined) {
    console.warn("No ingresaste ningun dato");
}
    else if (numero == "") {
    console.warn("Por favor ingresa un valor numerico");
} if ((numero % 2) === 0) {
    console.log("El numero es PAR");
} else {
    console.log("El numero es IMPAR")
}
}


esParImpar()
esParImpar(13)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.



function Grados(grados, unidad) {
    if (grados == undefined) {
        console.warn("No ingresaste grados a convertir");
    }
    else if (unidad === undefined) {
        console.warn("No ingresaste el tipo de grado a convertir");
    }

    if (unidad === "C") {
        console.info(`${grados}°C = ${Math.round(grados * (9/5) + 32)}°F`);
    }
    else if (unidad === "F") {
        console.info(`${grados}°F = ${Math.round((((grados - 32) * (5/9)))) }°C`);
    }
}

    Grados()
    Grados(2)
    Grados(100, "C")
    Grados(100, "F")

    // 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

    function convertirNumeros (numero = undefined, base = undefined) {
        if (numero === undefined) {
            console.warn("No ingresaste el numero a convertir");
        }
        else if (typeof numero !== "number") {
            console.error("El valor ingresado NO es un número");
        }
        else if (base === undefined) {
            console.warn("No ingresaste la base a convertir");
        }
        else if (typeof base !== "number") {
            console.error("El valor de la base NO es un número");
        }
        else if (base === 2) {
            console.info(`El número ${numero} base ${base} = ${parseInt(numero, base)} en base 10`)
        } else if (base === 10) {
            console.info(`El número ${numero} base ${base} = ${numero.toString(base)} en base 2`)
        } else {
            console.error("El tipo de base ingresado no es valido");
        }
    }
    convertirNumeros()
    convertirNumeros("2")
    convertirNumeros(2)
    convertirNumeros(100)
    convertirNumeros(100, "2")
    convertirNumeros(101, 2)
    convertirNumeros(4, 10)
    convertirNumeros(114, 10)
    convertirNumeros(300, 10)

    // 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
    function descuento(precio, descuento) {
        if (precio === undefined) {
            console.warn("No ingresaste ningun precio");
        }
        else if (typeof precio !== "number") {
            console.error("No ingresaste un valor númerico");
        }
        else if (descuento === undefined) {
            console.warn("No ingresaste ningun descuento");
        }
        else if (typeof descuento !== "number") {
            console.error("No ingresaste un valor númerico");
        } else {
            console.log(`${precio} - ${descuento}% = ${precio - (precio * descuento)/100}`)
        }
    }

    descuento()
    descuento("")
    descuento(100)
    descuento("", 20)
    descuento(1000, 20)
    // 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calculadoraDeAños = (anio,mes,dia) => {
    if (isNaN(anio)||!anio||Math.sign(anio)==-1) return console.error ("Porfavor ingresa un año valido")
    if (isNaN(mes)||!mes||Math.sign(mes)==-1||mes>12) return console.error ("Porfavor ingresa un mes valido")
    if (isNaN(dia)||!dia||Math.sign(dia)==-1||dia>31) return console.error ("Porfavor ingresa una fecha valida")
    
    let fechaActual= new Date()
    let fechaIngresada= new Date (anio,mes,dia) 
    let dias = ((fechaActual - fechaIngresada)/(1000*60*60*24))

    return console.log (`Desde el ${anio}/${mes}/${dia} han transcurrido ${Math.floor(dias/365)} años`)
} 
calculadoraDeAños(2000,11,21)