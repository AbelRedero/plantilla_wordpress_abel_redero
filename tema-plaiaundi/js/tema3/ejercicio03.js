/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Suma, media, aprobados
 */

const alumni = [
    { name: "Ane", mark: 8 },
    { name: "Iker", mark: 4 },
    { name: "June", mark: 7 }
];

function add_passed(student) {
    return { ...student, passed: student.mark >= 5 };
}
const alumni_3_1 = alumni.map(add_passed);
console.log("3-1:", alumni_3_1);


const add_passed_expression = function (student) {
    return { ...student, passed: student.mark >= 5 };
};
const alumni_3_2 = alumni.map(add_passed_expression);
console.log("3-2:", alumni_3_2);


const add_passed_arrow = (student) => ({
    ...student,
    passed: student.mark >= 5
});
const alumni_3_3 = alumni.map(add_passed_arrow);
console.log("3-3:", alumni_3_3);


const alumni_3_4 = alumni.map(function (student) {
    return { ...student, passed: student.mark >= 5 };
});
console.log("3-4:", alumni_3_4);


const alumni_3_5 = alumni.map(student => ({
    ...student,
    passed: student.mark >= 5
}));
console.log("3-5:", alumni_3_5);