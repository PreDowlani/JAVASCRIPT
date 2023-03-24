// ======= Iteradores o bucles =======

// bucle for
for (i = 0; i <= 100; i = i + 1) {
  console.log("Número " + i);
}

// break y continue en bucle for
// break
// for (i = 0; i <= 100; i = i + 1) {
//   // Leer registro i (1, 2, 3, 4,   hasta el 100)
//   // if (nombre === 'Pepe LaLeche' && DNI === '43.445.556-N' ) break;
//   console.log("Número " + i);
//   if (i === 32) break;
// }

// continue
for (i = 0; i <= 100; i = i + 1) {
  // Leer registro i (1, 2, 3, 4,   hasta el 100)
  // if (pais === 'Portugal') {
  // Hacer algo (código)
  //continue;}
  if (i === 46) break;
  console.log("Número " + i);
  if (i === 32 || i === 45) {
    console.log(i);
    continue;
  }
}

// while
i = 11;
while (i < 10) {
  i = i + 1;
  console.log(i);
}

// do..while
j = 12;
do {
  console.log(j);
  j++;
} while (j < 12);
