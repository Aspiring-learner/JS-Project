function add() {
    let studentname = document.getElementById("name").value;
    let semester = document.getElementById("semester").value;
    let semesterfee = document.getElementById("fee").value;
    let category = document.getElementById("category").value;

    const studentdata = {
        sname: studentname,
        semester: semester,
        semesterfee: semesterfee,
        category: category
    };

    let table = document.getElementById("table")
    let row = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    td1.innerHTML = studentdata.sname;
    td2.innerHTML = studentdata.semester;
    td3.innerHTML = studentdata.semesterfee;
    td4.innerHTML = studentdata.category;
    td5.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    table.appendChild(row);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('semester').value = '';
    document.getElementById('fee').value = '';
    document.getElementById('category').value = '';
}

function deleteStudent(button) {
    // Find the row to delete
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// function editStudent(button) {
//     // Find the row to edit
//     var row = button.parentNode.parentNode;

//     // Get the current values
//     var sname = row.cells[0].innerHTML;
//     var semester = row.cells[1].innerHTML;
//     var semesterfee = row.cells[2].innerHTML;
//     var category = row.cells[3].innerHTML;

//     // Fill the form with the current values
//     document.getElementById('name').value = sname;
//     document.getElementById('semester').value = semester;
//     document.getElementById('fee').value = semesterfee;
//     document.getElementById('category').value = category;

//     // Delete the current row
//     deleteStudent(button);
// }

