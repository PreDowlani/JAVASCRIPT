// CONDICIONES :

// if (condicion) {codigo 1 }
// else if (otra condicion)  {codigo 2}
// else if (otra condicion)  {codigo 3}
// else {codigo 4}

// true : siempre es IF 
// false : siempre coje el ELSE IF 

a=6

if (a>=6) {
    console.log(a + 'es igual o mayor que 6');
} else if (a<6) {
    console.log(a + "es menor que 6");
}

if (a>=6) {
    console.log(a + "es igual o mayor que 6")
} else {

    console.log(a + "es menor que 6")
}

haEntrado = true ;

// operador lógico NOT ----> negación  .. ! <--- esto cambia el true a flase o VICEVERSA

haEntrado = !haEntrado;
console.log(haEntrado);

//NaN ---> Not a Number 
// isNaN(x)  ( ¿No es x un número?)

x= 'lo que sea'
console.log(isNaN(x));
// --True  xq X no es un numero es un STRING ;

x = 32 ;
console.log(isNaN(x));
// False .. xq x si es un Numero !! 

// operadores de comparacion :
//  > < >= <= === !==

edad = 4
if (edad ===5) {
    console.log('No tiene usted 5 años');
} else if (edad <5) {
    console.log('Tiene usted menos de 5 años');
} else {
    console.log('Tiene usted mas de 5 años');
}

if (edad !==5) {
    console.log('No tiene usted 5 años');
} else {
    console.log('Tiene usted mas de 5 años')
}

// AND y OR
// && Y ||

hayPerros = true ;
hayGatos = true;

if (hayPerros && hayGatos) {  //AND
    console.log('tenemos perros y gatos')
} else if (hayPerros) {
    console.log('tenemos solo perros') 
} else if (hayGatos){
    console.log('tenemos solo gatos')
} else {
    console.log('tenemos el albergue cerrado');}


    hayPerros = true ;
    hayGatos = false;

if (hayPerros || hayGatos) { //OR
    console.log('o bien hay perros o bien hay gatos')
} else {
    console.log('no hay perros ni gatos');
}


// switch .. case
// switch (valor) 
valor = 4
switch (valor) {
    case 1:
        console.log('uno');
        break;
    case 2:
        console.log('dos');
        break;
    case 3: 
        console.log('tres');
        break;
    case 4:
        console.log('cuatro');
        break;
    default:
        console.log('Error');
        break;
}

// switch 
