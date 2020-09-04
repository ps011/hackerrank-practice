/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38 || 5 - grade%5 >= 3) return grade;
        else return  parseInt(grade, 10) + 5 - grade%5;
    })
}