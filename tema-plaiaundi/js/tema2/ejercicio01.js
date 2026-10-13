/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

let person_name = prompt("Introduce tu nombre");
let person_age = prompt("Introduce tu edad");
let person_heigth = prompt("Introduce tu altura");

console.log(typeof person_name);
console.log(typeof person_age);
console.log(typeof person_heigth);

person_name = Number(person_name);
person_age = Number(person_age);
person_heigth = Number(person_age);

console.log(typeof person_name);
console.log(typeof person_age);
console.log(typeof person_heigth);
