/**
 * =========== EVENTOS EN EL DOM
 */

// === respuesta a un click de usuario
// Eventos inline: Directamente en el HTML

// Crear el event listener en el código js. Por ej: btn.onclick
const btn = document.querySelector("#boton2");
// btn.onclick = function () {
//   alert("Ha pulsado el botón dos");
// };

// Añadiendo el método addEventListener
// Se le pasan dos argumentos:
// 1:  El evento que queremos escuchar
// 2: callback function que ejecutará el código pertinente
btn.addEventListener("click", () => console.log("Otro click de botón"));

const nombre = document.querySelector("#nombre");
// nombre.addEventListener("keydown", () => console.log("Tecla pulsada"));
// nombre.addEventListener("keyup", () =>
//   console.log("Has soltado la tecla pulsada")
// );

// Para conocer propiedades del elemento al que le hemos añadido el eventListener usamos el objeto evento
// nombre.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "a":
//       mueveIzquierda(event);
//     case "s":
//       mueveAtras(event);
//     case "w":
//       mueveAdelante(event);
//     case "d":
//       mueveDerecha(event);
//   }

//   console.log(event);
//   console.log(`${event.key} ${event.keyCode}`);
//});

// Evento blur para cuando un usuario escribe (o no) texto en una caja de formulario y sale de ella
// mediante "click fuera de la caja" o tecla tabulador.
const cajaTexto = document.querySelector("#nombre");
cajaTexto.addEventListener("blur", () => console.log("Has salido de la caja"));
cajaTexto.addEventListener("copy", () => console.log("Copiado!!"));
cajaTexto.addEventListener("paste", () => console.log("Pegado!!"));
cajaTexto.addEventListener("cut", () =>
  console.log("Cortado. Pégalo ahora aquí mismo!!")
);

// Eventos de ratón
// const btn01 = document.querySelector("#uno");
// btn01.addEventListener("mousedown", () => console.log("Has hecho medio click"));
// btn01.addEventListener("mouseup", () =>
//   console.log("Has hecho un click completo")
// );

// btn01.addEventListener("mouseup", (event) => console.log(event));

const btn01 = document.querySelector("#uno");
const btn02 = document.querySelector("#dos");
// Evento mouseenter
btn02.addEventListener("mouseenter", () =>
  console.log("¡¡Has entrado en mi territorio!!")
);
btn02.addEventListener("mouseout", () => console.log("¡¡Hasta la próxima!!"));

// btn01.addEventListener("dblclick", () => {
//   console.log("Doble Click!!");
// });

// evento input
nombre.addEventListener("input", (event) =>
  console.log(`${event.type} ${event.target} ${event.target.value}`)
);

// Eventos de formulario
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  console.log(evento.target.action);
  console.log(evento.target.method);
});
