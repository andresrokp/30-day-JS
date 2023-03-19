function doTask1() {
    return new Promise((resolve)=>{setTimeout(() => resolve('Task 1'), 300)});
}

function doTask2() {
    return new Promise((resolve)=>{setTimeout(() => resolve('Task 2'), 300)});
}

function doTask3() {
    return new Promise((resolve)=>setTimeout(() => resolve('Task 3'), 300));
}

module.exports.doTask1 = doTask1;
module.exports.doTask2 = doTask2;
module.exports.doTask3 = doTask3;


// original

function doTask1original(callback) {
    setTimeout(() => callback('Task 1'), 300);
  }
  
function doTask2original(callback) {
    setTimeout(() => callback('Task 2'), 300);
  }
  
function doTask3original(callback) {
    setTimeout(() => callback('Task 3'), 300);
}


/*
Hola. Excelente ejercicio, muy buen reto. Puso a loquear un rato. Chévere el aumento de dificultad que están poniendo.
.
.
Comparto mi solución comentada
.
.
.
.
.
.
Creo que lo entendí asi: .then() es un manejador de promesas que solo funciona si la función anterior de la cadena (el primer doTask() u otro then()) devuelve una promesa. Ahí se siente obligado a esperar. Si la función anterior no tiene return; coge un undefined como la siguiente response y sigue derecho.
Entonces, al doTask1() le concateno un then() que espera el return de la Promise en la definición de doTask1(). Esto se le alimenta al then() y ejecuta el push, para luego ejecutar y retornar la otra promesa. Este ciclo se cumple para los demás. La diferencia está en el último then() que no retorna para otro then() sino para la Promise principal y le pasa el strings como resolve
```
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1().then(response => {
      strings.push(response);
      return doTask2();
    })
    .then(response => {
      strings.push(response);
      return doTask3();
    })
    .then(response => {
      strings.push(response)
    })
    .then(() => { return resolve(strings) })
  })
}
```

Envolver el setTimeout() en una promesa es insertarlo como cuerpo de la función prometida en la promesa. Como es una sola línea el return es automático. Sí toca hacerle return a la promesa


```
export function doTask1() {
  return new Promise((resolve) => { window.setTimeout(() => resolve('Task 1'), 300) });
}

export function doTask2() {
  return new Promise((resolve) => { window.setTimeout(() => resolve('Task 2'), 300) });
}

export function doTask3() {
  return new Promise((resolve) => window.setTimeout(() => resolve('Task 3'), 300));
}
```

*/