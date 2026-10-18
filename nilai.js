let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

let highestStudent = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > highestStudent.score) {
        highestStudent = studentsScore[i];
    }
}

console.log("=== HASIL PENCARIAN SISWA DENGAN NILAI TERTINGGI ===");
console.log(`Nama  : ${highestStudent.name}`);
console.log(`Nilai : ${highestStudent.score}`);