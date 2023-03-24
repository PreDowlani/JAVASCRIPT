function escribe () {
	console.log('Saludos');
	console.log('Joven Aprendiz');
}

escribe();

// Cada vez que llamemos a la función escribirá lo que hemos incluido en ella. Pero ¿y si queremos que nos escriba cualquier cosa que nos interese? Vamos a reescribir la función.
function escribe (mensaje) {
	console.log(mensaje);
}

escribe('Saludos');
escribe('Joven Aprendiz');
escribe('Aprende bien las funciones');

// =======  PARÁMETROS Y Y ARGUMENTOS =====

function suma (a, b) { // a y b son los parámetros de la función
    return a + b;
  }
  
  console.log(suma(3,2)); // 3 y 2 son los argumentos que le pasamos a la función 
  //cuando la invocamos



  function nombreCompleto (nom, ape) {
	return `${nom} ${ape}`;
}
console.log(nombreCompleto("José")); // Solo hemos pasado un argumento, con lo que
// nos aparecerá como undefined


function nombreCompleto (nom, apellido = "") { // Por defecto el apellido es ""
	return `${nom} ${ape}`;
}


// Llamadas entre funciones

function comprobandoLogin () {
    console.log("Comprobando...");
  }
  
  function inicioLogin () {
     console.log("Introduzca nombre");
     comprobandoLogin(); 
   }
  
  inicioLogin();


  let total = 0; 
function compraUsuario (compra) {
  return total = total + compra;
}

function calcularImpuesto (total) {
  return total = total * .07; // IGIC 7%, o 0.07
}

total = compraUsuario (300);
total = compraUsuario (600);
total = compraUsuario (100);

const precioTotal = calcularImpuesto (total);

console.log (total);
console.log (precioTotal);