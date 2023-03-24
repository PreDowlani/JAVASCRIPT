// Arrays. Tambien llamados arreglos

// Creación de arrays
const inventario = [1, 'One Piece', 7, true, 25, 35.45];
const precios = [];

// Otra forma de crear arrays
const sabores = new Array();
const perros = new Array(10);
const gatitos = new Array('Persa', 'Siamés', 'British');

// Longitud de un array
//const colores = ['rojo', 'azul', 'verde'];
// long = colores.length;
// console.log(long);

// Redefinir la longitud del array
// colores.length = 2;
// console.log(colores);

// Acceder a elemento de un array
// console.log(colores[1], colores[2]);

// Objeto tiene propiedades y métodos (o funciones)

// Método toString()
// colores.toString()
// aCadena = colores.toString();
// console.log(aCadena);

// Métodos Stack. Array funciona como una pila de elementos
// LIFO: Last In, First Out

// Añadir elemento al final del array. Método push()
colores = ['rojo', 'azul', 'verde', 'amarillo'];
colores.push('negro', 'blanco');
console.log(colores);

// Eliminar elemento del final del array. Método pop()
colores.pop();
console.log(colores);

// spread operator: ...
// masColores = [...colores,'naranja','violeta'];
masColores = ['naranja','violeta',...colores];
console.log(masColores);

// Destructuring: Asignación desestructurante
 const [na,vi,ro] = masColores;
 console.log(na, vi, ro);
 // Extraer de una posición determinada
 const [,,ve] = colores;
 console.log(ve);

 duplicadoColores = [...colores];
 console.log(duplicadoColores);

//  colores.sort();
//  console.log(colores);
 
 colores.reverse();
 console.log(colores);

 incluye = colores.includes('verde');
 console.log(incluye);
 pos = colores.indexOf('verde');
 console.log(pos);
 ver = colores[pos];
console.log(colores);
 // método slice(). Devuelve elementos SIN eliminarlos del array
 // Sintaxis: slice(1,3)
extraccion = colores.slice(1,3);
console.log(extraccion);

// método splice(). 
const coloresTres = ['amarillo', 'naranja', 'azul', 'rojo']
// Suprimir: Elimina del array
extra = coloresTres.splice (2,3);
console.log(extra);
console.log(coloresTres);
// Insertar
// (posicion, numero de elementos a eliminar, elementos a insertar)
coloresTres.splice(1,0,'rosa');
console.log(coloresTres);
// Reemplazar
// (posicion, numero de elementos a reemplazar, elemento a insertar)
coloresTres.splice(1,2,'azul cobalto','negro');
console.log(coloresTres);