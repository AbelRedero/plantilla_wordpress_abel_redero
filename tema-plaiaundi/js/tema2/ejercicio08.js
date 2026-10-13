/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 8 · Clasificación de una nota
 */

function evaluate_grade() {
    let input = prompt("Enter a numerical grade between 0 and 10:");
    let grade = Number(input);

    if (isNaN(input) || input.trim() === "") {
        console.log("Error: You did not enter a valid number.");
        return;
    }

    if (grade < 0 || grade > 10) {
        console.log("Error: The number must be between 0 and 10.");
        return;
    }

    let result;
    if (grade >= 9) {
        result = "Outstanding";
    } else if (grade >= 7) {
        result = "Notable";
    } else if (grade >= 5) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    console.log(`Grade: ${result}`);
}

evaluate_grade();
