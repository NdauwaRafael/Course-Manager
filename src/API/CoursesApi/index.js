/**
 * Created by Raphael Karanja on 2019-01-25.
 */
let getAllCourses =  async function () {
    return await (await (await (fetch('http://localhost:3004/courses')))).json();
};
let createCourse = function (course) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    };

    return fetch('http://localhost:3004/courses', options);
}

export default {
    getAllCourses,
    createCourse
}