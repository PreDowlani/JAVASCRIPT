// Variable: Contenedor de algún valor determinado
// Ejemplo: Número de gafas en el carrito
// nombre -- dato
let g = 12; // Declaración de variable
var h = 12; // Declaración de variable
// palabra reservada o keyword


// Se usa el camelCase : 
estaEnCasa
  




const PI = 3.141592653589793;

// === Tipos de datos ===
// Numérico
let gafas = 32; // entero (integer)
let inventario = -15; // entero (integer)
let precio = 125.45; // decimal (coma flotante)
let perdidas = -10000.345; //decimal (coma flotante)

// Not a Number: NaN
let a = 1 / 0;
console.log(a);
let b = 0 / 0;
console.log(b);

// Boolean (Buleanos)
let haTerminadoLaPartida = false; // Equivale a 0
let haTerminadoElPartido = true; // Equivale a 1

let carritoVacio = true;

// Strings (Cadenas de texto)
let nombre = 'Antonio';
nombre = 'Macarena';

// Undefined (Variables sin asiganación de valor previa)
let numeroDeBarcos;
console.log(numeroDeBarcos);

// null (ausencia "intencionada" de un valor)
let numeroDeJugadores = null;
numeroDeJugadores = 4;

let usuarioHaEntrado = null;
// //
usuarioHaEntrado = 'Macarena';
console.log(usuarioHaEntrado);

// El Objeto Math: Contiene propiedades y funciones matemáticas
// propiedades
console.log(Math.PI);
lnBaseE = Math.E;
console.log(lnBaseE);
precioBase = 7.5;

// funciones
let redondeo = Math.floor(precioBase);
console.log(redondeo);
otroRedondeo = Math.ceil(precioBase);
console.log(otroRedondeo);

// aleatorio = Math.random();
// console.log(aleatorio);
multi= Math.random();
console.log(multi);

// POTENCIAS SE USAN MUCHO :
Math.pow(2,4) =16

Math.floor (4.8) = 4 //siempre se va el de abajo
Math.ceil (4.3) = 5 //siempre coge el mumero mayor



numAleatorio = Math.floor(multi*8) + 1;
console.log('Número Aleatorio:' + numAleatorio);

numDosAleatorio = Math.random() * 10 + 1;
numDosAleatorio = numDosAleatorio.toFixed(2);
console.log(`Número Aleatorio Dos: ${numDosAleatorio}`);

// === Operaciones con números ===
// === suma, resta, multiplicación, división, potencia, módulo ===
inventario = 15;
precioTotal = inventario * precio;
console.log(precioTotal);

precio = precio + 2;
console.log(precio);
inventario = inventario + 1;
inventario = inventario * 3;

fuerzas = inventario / precio;
console.log(fuerzas);

precio = precio ** 3; // potencia
console.log(precio);

resto = 5 % 2;
console.log(resto);

// Solicitar entrada de datos (input)
numero = prompt('Introduzca un número');
// numero = '7'
numeroEnt = parseInt(numero); // numeroEnt = 7
console.log(numeroEnt);
// numeroDos = '5' + '1';
numeroDos = 5 + '1';
console.log('El resultado es ' + numeroDos);

// Concatenación de strings. Con el símbolo +
nombre = 'Fran';
apellido = 'Dávila';
nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

dragones = 7;
dragones = dragones + 1;
dragones++; // equivale a dragones + 1

// Precedencia de operaciones matemáticas
let calculo = 5 + 3 * 2 ** 2;
// PEMDAS : Paréntesis, exponentes, multiplicación, división, adición(suma), substracción (resta)

// Conversión entre tipos
// De String a número
numeroJugadores = '12.56';
numTotal = parseFloat(numeroJugadores);
console.log(numTotal);
numTotal = parseInt(numeroJugadores);
console.log(numTotal);
// de número a String
numeroJugadores = 15;
numTotal = numeroJugadores.toString();
console.log(numTotal);

// Como conocer el tipo de dato de una variable
// Con typeof()
console.log(typeof numeroJugadores);

// CamelCase
let haEntradoEnElSistema = true;

let ha_entrado_en_el_sistema = true;

numero = Math.random();
console.log(numero);
numero2 = Math.random() * 10;
console.log(numero2);
numero2 = numero2.toFixed(2); //Se acrota el decimal a 2 . 
console.log(numero2);

aleatorio = Math.floor(Math.random() * 2);
console.log(aleatorio);
