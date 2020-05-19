import { allCourses } from './allcourses.js';
import { addNewCourseEventListiner } from './listiners.js'; 

allCourses();
addNewCourseEventListiner(document.querySelector('#submitButton'));
