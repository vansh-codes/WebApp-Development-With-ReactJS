function print(first, ...second){
    console.log(first);
    console.log(second);
}

print(1,2,3,4,5,6,7,8,9,10);

var displaycolors = function (message) {
    document.write("<b>"+message+"</b>");
    for (i in arguments) {
        document.write(arguments[i] + "<BR>");
    }
};

let message = "List of colors: ";
displaycolors(message, "Red");
displaycolors(message, "Red", "Green");
displaycolors(message, "Red", "Green", "Blue");

document.write("<br>")

var duplicateArr = (arr) => {
    return [arr, ...arr];
}

document.write(duplicateArr([1,2,3,4,5]));
document.write("<br><br>")

var sumArr = (...arg) => {
    var sum = 0;
    for (let i of arg) {
        sum += i;
    }
    return sum;
}

document.write("Sum: " + sumArr(1,2,3,4,5,6,7,8,9,10));
document.write("<br><br>")

var processData = (students) => {
    // Step1: filter out students with an avg below 70
    const filterData = students.filter(student => {
        const avg = student.grades.reduce((acc, val) => acc + val, 0);
        return (avg/3) <= 70;
    });

    // Map the sorted arr to a new arr of objects that only includes the stu
    const mappedStudents = students.map(student => {
        const avgGrade = student.grades.reduce((acc, val) => acc + val, 0);
        return {
            name: student.name,
            avgGrade: avgGrade
        }
    });
}

const students = [
    { name: "Alice", age: 20, grades: [85,90,78], attendance: [true, true, false] },
    { name: "Bob", age: 21, grades: [70,80,75], attendance: [true, false, false] },
    { name: "Charlie", age: 22, grades: [60,65,70], attendance: [true, true, true] }
];


document.write(processData(students));