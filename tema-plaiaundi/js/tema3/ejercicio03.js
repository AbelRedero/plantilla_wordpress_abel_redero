/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Suma, media, aprobados
 */

const alumni = [
    { name: "Ane", mark: 8 },
    { name: "Iker", mark: 4 },
    { name: "June", mark: 7 }
];

const alumni_that_passed = alumni.map(alumni => ({
    ...alumni,
    passed: alumni.mark >= 5
}));

console.log(alumni_that_passed);