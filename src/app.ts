interface Student {
    id: string;
    name: string;
    age: number;
}

type Subject = 'Math' | 'Science' | 'Literature' | 'History';
type Grades = Record<Subject, number>;

interface UniversityRecord {
    students: Record<string, Student>;
    grades: Record<string, Grades>;

}

const universityRecord: UniversityRecord = {
    students: {
        "1": {id: "1", name: "Alice", age: 20},
        "2": {id: "2", name: "Bob", age: 22},
        "3": {id: "3", name: "Charlie", age: 21},
    },
    grades: {
        "1": {Math: 90, Science: 85, Literature: 88, History: 92},
        "2": {Math: 75, Science: 80, Literature: 78, History: 85},
        "3": {Math: 88, Science: 92, Literature: 81, History: 89},
    },
};

const getStudentGrades = (universityRecord: UniversityRecord, studentId: string): Grades => {
    return universityRecord.grades[studentId];
}

const getAverageGrade = (universityRecord: UniversityRecord, subject: Subject): number => {
    const allGrades = Object.values(universityRecord.grades);
    const total = allGrades.reduce((sum, grades) => sum + grades[subject], 0);
    return total / allGrades.length;
}

console.log(getStudentGrades(universityRecord, '1'));

console.log(getAverageGrade(universityRecord, 'History'));