import { URL } from './links.js';
import { editCourse } from './edit.js';
import { deleteCourse } from './delete.js';

export function allCourses(){
    fetch(URL + '/course')
        .then(response => response.json())
        .then(data => {
            addDataToTable(data);
        });
}

function addDataToTable(data){
    let tbody = document.querySelector('tbody');
    for(let row of data){
        tbody.appendChild(createRow(row));
    }
}

function createRow(rowData){
    let row = document.createElement('tr');
    for(let prop in rowData){
        let column = createColData(rowData[prop]);
        row.appendChild(column);
    }
    row.appendChild(addButtons(rowData));
    return row;
}

function createColData(colData){
    let col = document.createElement('td');
    col.innerHTML = colData;
    return col;
}

function addButtons(rowData) {
   let td = document.createElement('td');
   td.setAttribute('class', 'd-flex justify-content-around');
   td.appendChild(createEditButton(rowData.id));
   td.appendChild(createDeleteButton(rowData.id));
   return td;
}

function createEditButton(id) {
    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-primary');
    button.addEventListener('click',function(){
        editCourse(id);
    })
    button.innerHTML = 'EDIT';
    return button;
}

function createDeleteButton(id) {
    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-danger');
    button.addEventListener('click',function(){
        deleteCourse(id);
    })
    button.innerHTML = 'DELETE';
    return button;
}
