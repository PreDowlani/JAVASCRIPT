// Funciones en un objeto

const robot = {
  modelo: "T-1000",
  capDestructiva: "10^44 Megatones",
  arrancar: function () {
    console.log("Arrancando");
  },
  girarDerecha: function (grados) {
    console.log(`Girando a la derecha ${grados} grados`);
  },
};

console.log(robot.modelo);
robot.arrancar();
robot.girarDerecha(90);

robot.parar = function () {
  console.log("Tate quieto. Sayonara baby");
};

robot.parar();

// Métodos de Arrays
const tipos = [
  "terrera",
  "ático",
  "dúplex",
  "piso",
  "loft",
  "villa",
  "apartamento",
];

// Método forEach
// array.forEach(function() {}) // Atención: Todo el parámetro entre paréntesis

tipos.forEach(function (casa) {
  console.log(`Tienes un/una ${casa}`);
});

const cervezas = [
  "Cruz Campo",
  "Mahou",
  "Tropical",
  "Alhambra",
  "1906",
  "Estrella Galicia",
];

cervezas.forEach(function (birra) {
  console.log(`${birra} es la mejor cerveza del mundo`);
});

// Método map
let numeros = [1, 5, 10, 15];

let dobles = numeros.map(function (x) {
  return x * 2;
});

let numeros2 = [1, 4, 9, 16];
let raices = numeros2.map(function (num) {
  // return Math.sqrt(num)
  return `Número ${num}`;
});

console.log(dobles);
console.log(raices);

const cervezas2 = [
  "Heineken",
  "Mahou",
  "Tropical",
  "Alhambra",
  "1906",
  "Estrella Galicia",
];

birras = cervezas2.map(function (birra) {
  return `La mejor cerveza del mundo es ${birra}`;
});

console.log(birras);

// Método filter()
const numeros3 = [12, 5, 8, 130, 44];

mayorQue = numeros3.filter(function (numero) {
  return numero >= 10 && numero < 50;
});

console.log(mayorQue);

// Método some()

const numeros4 = [1, 3, 5, 7, 9];

pares = numeros4.some(function (numero) {
  return numero % 2 === 0;
});

console.log(pares);

// Método every()
pares2 = numeros4.every(function (numero) {
  return numero % 2 === 0;
});

console.log(pares2);

// Método find()
const viviendas = [
  {
    id: 094, // key : value
    tipoPropiedad: "piso",
    fechaCompra: 1999,
    precioVenta: {
      inicial: 200000,
      conDescuento: 195000,
    },
    propietario: "Arturo Pérez",
    enVenta: true,
  },
  {
    id: 095, // key : value
    tipoPropiedad: "duplex",
    fechaCompra: 2014,
    precioVenta: {
      inicial: 250000,
      conDescuento: 230000,
    },
    propietario: "Rigoberto García",
    enVenta: true,
  },
  {
    id: 096, // key : value
    tipoPropiedad: "piso",
    fechaCompra: 2021,
    precioVenta: {
      inicial: 300000,
      conDescuento: 300000,
    },
    propietario: "Arturo Pérez",
    enVenta: false,
  },
];

// Método find()
buscaTipo = viviendas.find(function(vivienda){
    return vivienda.tipoPropiedad === 'piso';
})

console.log(buscaTipo);

// Método findIndex
indiceTipo = viviendas.findIndex(function(vivienda){
    return vivienda.tipoPropiedad === 'duplex';
})

console.log(indiceTipo); // Devuelve 1