var universityRecord = {
    students: {
        "1": { id: "1", name: "Alice", age: 20 },
        "2": { id: "2", name: "Bob", age: 22 },
        "3": { id: "3", name: "Charlie", age: 21 },
    },
    grades: {
        "1": { Math: 90, Science: 85, Literature: 88, History: 92 },
        "2": { Math: 75, Science: 80, Literature: 78, History: 85 },
        "3": { Math: 88, Science: 92, Literature: 81, History: 89 },
    },
};
var getStudentGrades = function (universityRecord, studentId) {
    return universityRecord.grades[studentId];
};
var getAverageGrade = function (universityRecord, subject) {
    var allGrades = Object.values(universityRecord.grades);
    var total = allGrades.reduce(function (sum, grades) { return sum + grades[subject]; }, 0);
    return total / allGrades.length;
};
console.log(getStudentGrades(universityRecord, '1'));
console.log(getAverageGrade(universityRecord, 'History'));
