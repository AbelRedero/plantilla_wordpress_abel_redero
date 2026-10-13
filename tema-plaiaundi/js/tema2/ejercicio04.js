/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */


let liters = 100;
const TAKEN_LITERS = 7;

for (i in 5) {
    liters -= TAKEN_LITERS;
    console.log('liters: ' + liters);
}
