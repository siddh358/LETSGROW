var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["contactno"] = document.getElementById("contactno").value;
    formData["address"] = document.getElementById("address").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.contactno;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.address;
    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-sm btn-success'>Edit</a>
                        <a href="#" onClick='onDelete(this)' class='btn-sm btn-danger'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contactno').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('contactno').value = selectedRow.cells[2].innerHTML;
    document.getElementById('address').value = selectedRow.cells[3].innerHTML;
    document.getElementById('city').value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.contactno;
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.city;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}