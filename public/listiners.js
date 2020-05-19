import { addNewCourse } from './add.js';
import { updateCourse } from './update.js';

function addCourseEventFunction(event){
        addNewCourse(event);
        event.preventDefault();
}

export function addNewCourseEventListiner(element){
    element.addEventListener('click', addCourseEventFunction);
}

export function removeNewCourseEventListiner(element){
    element.removeEventListener('click', addCourseEventFunction);
}


function updateEventListinerFunction(event){
    updateCourse(event);
    event.preventDefault();
}

export function addUpdateCourseEventListiner(element){
    element.addEventListener('click', updateEventListinerFunction);
}

export function removeUpdateCourseEventListiner(element){
    element.removeEventListener('click',updateEventListinerFunction);
}