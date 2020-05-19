import { URL } from './links.js';

export function deleteCourse(id) {
    fetch( URL + '/course/' + id, {
        method: 'DELETE'
    });
}