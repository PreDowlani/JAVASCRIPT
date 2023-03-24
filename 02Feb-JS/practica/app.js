// Condicionales

// if (condicion) {código 1}
//  else if (otraCondicion) { codigo 2}
//  else if (otraCondicionMas) {codigo 3}
//  else {codigo 4}
a = 6;

if (a >= 6) {
  console.log(a + " es igual o mayor que 6");
} else if (a < 6) {
  console.log(a + " es menor que 6");
}

if (a >= 6) {
  console.log(a + " es igual o mayor que 6");
} else {
  console.log(a + " es menor que 6");
}

haEntrado = false;

// operador lógico NOT --> negación
haEntrado = !haEntrado;
console.log(haEntrado);

// NaN --> No es un número
// isNaN(x) (¿No es x un número)
x = 32;
console.log(isNaN(x));

//Operadores de comparación
// >  <  >= <= === !==
edad = 4;
// if (edad === 5) {
//   console.log("Tiene usted 5 años");
// } else if (edad < 5) {
//   console.log("Tiene usted menos de 5 años");
// } else {
//     console.log('Tiene usted mas de 5 años')
// }

if (edad !== 5) {
  console.log("No tiene usted 5 años");
} else console.log("Tiene usted cinco años");

// AND y OR
// &&  y ||

hayPerros = false;
hayGatos = true;

if (hayPerros && hayGatos) {
  console.log("Tenemos perros y gatos");
} else if (hayPerros) {
  console.log("Solo tenemos perros");
} else if (hayGatos) {
  console.log("Solo tenemos gatos");
} else {
  console.log("Tenemos cerrado el albergue");
}

if (hayPerros || hayGatos) {
  console.log("O bien hay perros, o bien hay gatos");
} else {
  console.log("No hay ni perros ni gatos");
}


// switch..case
// switch (valor)
valor = 4;
switch (valor) {
    case 1:
        console.log('Uno');
        break;
    case 2:
        console.log('Dos');
        break;
    case 3:
        console.log('Tres');
        break;
    case 4:
        console.log('Cuatro');
        break;
    case 5:
        console.log('Cinco');
        break;
    default:
        console.log('Error');
        break;
}

// switch..case con condicionales 
let fluzo = Math.random()*10+1;
fluzo = fluzo.toFixed(2);
console.log(fluzo);

switch (true) {
    case fluzo < 5:
        console.log('El condensador del fluzo está por debajo de 5');
        break;
    case fluzo >= 5:
        console.log('El condensador del fluzo tiene un valor por encima de 5');
        break;
}

// operador ternario
// condicion (a=9)? 'nueve': 'no nueve'

estaAutenticado = false;
estaAutenticado? console.log('Está dentro') : console.log('No está dentro')