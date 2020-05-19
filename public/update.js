import { addNewCourseEventListiner, removeUpdateCourseEventListiner } from './listiners.js';
import { formData } from './add.js';
import { URL } from './links.js';

export function updateCourse() {
    const course = formData();
    fetch(URL + '/course/' + course.id, {
            method: "PUT", 
            body: JSON.stringify(course),
            redirect:"manual",
            headers: { 
                "Content-type": "application/json"
            } 
    }).then(response => response.json())
    .then(data => console.log(data))    ;

    let button = document.querySelector('#submitButton');
    button.value='ADD NEW COURSE';
    button.setAttribute('class','btn btn-block btn-primary');
    removeUpdateCourseEventListiner(button);
    addNewCourseEventListiner(button);

}