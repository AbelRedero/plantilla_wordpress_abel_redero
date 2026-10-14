/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Suma, media, aprobados
 */

marks = [5, 8, 3, 10, 6];

let total = 0;
 for (const n of marks) {
   total += n;
 }

 let average = total / marks.length
 console.log(total)
 console.log(average)

 for (let i = 0; i < marks.length; i++) {
   console.log(marks[i] >= 5);
 }