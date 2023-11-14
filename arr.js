const students = [
    { name: 'John ', age: 20, department: 'Computer Science', totalMarks: 85 },
    { name: 'Aswin', age: 22, department: 'Mathematics', totalMarks: 92 },
    { name: 'Doblin', age: 21, department: 'Physics', totalMarks: 78 },

];

// Display table data
function displayTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.map(student => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td><td>${student.age}</td><td>${student.department}</td><td>${student.totalMarks}</td>`;
        tableBody.appendChild(row);
    });
}
displayTable(students);


// Sort array items based on selected   dropdown field
document.getElementById('sortField').addEventListener('change', function () {
    const selectedField = this.value;
    students.sort((a, b) => a[selectedField] > b[selectedField] ? 1 : -1);
    displayTable(students);
});

//  search option  
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value;
    const filtereditems = students.filter(student =>
        Object.values(student).some(value => value.toString().toLowerCase().includes(searchTerm))
    );
    displayTable(filtereditems);
});




// Function to filter students with marks greater than a given mark
function filterStudents() {
    const filterMark = document.getElementById("filterMark").value;
    const filteredStudents = students.filter(student => student.totalMarks > filterMark);
    displayTable(filteredStudents);
}

