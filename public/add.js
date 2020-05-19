import { URL } from './links.js';

export function addNewCourse(event){
    const course = formData();
    fetch(URL +'/course', {
             method: "POST", 
             body: JSON.stringify(course),
             redirect:"manual",
             headers: { 
                 "Content-type": "application/json"
             } 
     }).then(response => response.json());

     event.preventDefault();
}

export function formData(){
    let elements = document.forms['courseform'].elements;
    const course = {
        "id": elements['id'].value,
        "description": elements['description'].value,
        "fee": elements['fee'].value
    };
    return course;
}