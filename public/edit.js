import { URL } from './links.js';
import { removeNewCourseEventListiner, addUpdateCourseEventListiner } from './listiners.js';

export function editCourse(id){
   
    fetch(URL + '/course/'+id)
        .then(response => response.json())
        .then(data => fillDataInForm(data));
}

function fillDataInForm(data){
    let elements = document.forms['courseform'].elements;
    elements['id'].value = data.id;
    elements['id'].setAttribute('readonly','readonly');
    elements['description'].value = data.description;
    elements['fee'].value = data.fee;
    
    let button = document.querySelector('#submitButton');
    button.value='UPDATE DATA';
    button.setAttribute('class','btn btn-block btn-secondary');
    removeNewCourseEventListiner(button);
    addUpdateCourseEventListiner(button);

    window.location = '#edit-course';
}

