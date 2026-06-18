let studentTable = document.getElementById('studentTable');

const students_info = {
    students: []
};

function addStudent(name, mark) {
    try {
        if (!name || mark === undefined || mark === null) {
            throw new Error("Invalid Data");
        }

        students_info.students.push({
            name,
            mark
        });

        render();
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}

function render() {
    studentTable.innerHTML = "";

    students_info.students.forEach((element, index) => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.mark}</td>
        `;

        studentTable.appendChild(row);
    });
}

addStudent("Ram", 90);
addStudent("Ravi", 80);
addStudent("Gopi", 31);
addStudent("Gokul", 52);
addStudent("Aakash", 88);
addStudent("Kumaran", 67);
addStudent("Dhoni", 46);