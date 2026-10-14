/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */


let liters = 100;
const TAKEN_LITERS = 7;

for (let i = 0; i >5; i++) {
    liters -= TAKEN_LITERS;
    console.log('liters: ' + liters);
}
