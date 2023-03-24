// // Arrays

// numeros = [0,1,2,3,4,5];
// alumnosDeClaseDeProgr = ['Dani','Manuel','Pre'];
// carritoDeCompra = ['pan','leche','chuches','jamón'];
// console.log(numeros[3]);
// console.log(carritoDeCompra[1])

// long = alumnosDeClaseDeProgr.length;
// console.log(long);

// // Mostrar todos los elementos del array alumnosDeClaseDeProgr
// for (i=0;i<alumnosDeClaseDeProgr.length;i++) {
//     console.log(alumnosDeClaseDeProgr[i]);
// }

arrayLoco = [123,'Clara',true, 124,'Gabriel',true, 125,'Yudi', false];

// Mostrar datos del usuario 124 (o el que sea)
for (i=0;i<arrayLoco.length;i=i+3) {
    if (arrayLoco[i] === 124) {
    console.log(arrayLoco[i]);
    console.log(arrayLoco[i+1]);
    console.log(arrayLoco[i+2]);
    }
}

// Mostrar de la forma adecuada los datos del usuario x
usuario = prompt('Introduzca número de usuario a localizar: entre 123 y 125');
usuario = parseInt(usuario);
if (usuario <123 || usuario >125){console.log('Número de usuario incorrecto')}
else {
for (i=0;i<arrayLoco.length;i=i+3) {
    if (arrayLoco[i] === usuario){
    if (arrayLoco[i+2] === true) {estaActivo='activado'} else {estaActivo='desactivado'};
    console.log('En la posición ' + arrayLoco[i] + ' tenemos a ' + arrayLoco[i+1] + '.Este usuario está ' + estaActivo);
    }
  }
}

arrayLoco[arrayLoco.length] = '126';

const colores = ['amarillo', 'naranja', 'azul', 'rojo'];
console.table(colores);

console.log(colores.toString());

// Añadir elementos al final del array
// utilizamos el método push()
colores.push('blanco', 'turquesa');
console.table(colores);
// Eliminar elementos por el final del array.
// Con pop()
colores.pop();
console.table(colores);

//Añadir elementos por el principio del array
// colores.shift();
// console.table(colores);

colores.unshift('negro');
console.table(colores);

// Método indexOf()
posicion = colores.indexOf('negro', 2); // para ver la posicion del arraya esta localizado
console.log(posicion);

comprobar = colores.includes('verde'); // true si existe , flase si no existe
console.log(comprobar);

// CRUD = CREATE , READ , UPDATE , DELETE