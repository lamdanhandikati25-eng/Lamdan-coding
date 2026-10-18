// 1. Basic Variables
let name = "Adil";
let java_programming_score = 80;
let python_programming_score = 100;
let javascript_programming_score = 80;


// 2. Object Declaration
let studentData = {
    name: "Andi",
    java_programming_score: 80,
    python_programming_score: 100,
    javascript_programming_score: 80
};

// Another student object
let secondStudentData = {
    name: "Andi",
    java_programming_score: 80,
    python_programming_score: 100,
    javascript_programming_score: 80
};

console.log(studentData["name"]);
console.log(studentData["java_programming_score"]);
console.log(studentData.python_programming_score);
console.log(studentData.javascript_programming_score);


// 3. Object with a Method
let studentWithMethod = {
    name: "Andi",
    java_programming_score: 80,
    python_programming_score: 100,
    javascript_programming_score: 80,
    infostudent: function () {
        return (
            "name : " + this.name + "\n" +
            "java score : " + this.java_programming_score + "\n" +
            "python score : " + this.python_programming_score + "\n" +
            "js score : " + this.javascript_programming_score
        );
    }
};

// Adding and deleting properties
secondStudentData["id_number"] = "1102020";
console.log(secondStudentData);

delete secondStudentData["id_number"];
console.log(secondStudentData);


// 4. Array of Objects
const studentArray = [
    {
        name: "Andi",
        java_programming_score: 80,
        python_programming_score: 100,
        javascript_programming_score: 80,
    },
    {
        name: "Rudi",
        java_programming_score: 80,
        python_programming_score: 100,
        javascript_programming_score: 80,
    },
    {
        name: "Dio",
        java_programming_score: 80,
        python_programming_score: 100,
        javascript_programming_score: 80,
    }
];

// Mengakses objek didalam array
for (let i in studentArray) {
    for (let j in studentArray[i]) {
        console.log(j + " : " + studentArray[i][j]);
    }
}