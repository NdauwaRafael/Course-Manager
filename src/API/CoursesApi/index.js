/**
 * Created by Raphael Karanja on 2019-01-25.
 */
let getAllCourses =  async function () {
    return await (await (await (fetch('http://localhost:3004/courses?_expand=category&_expand=author')))).json();
};
let saveCourse = async function (course) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    };
    return await (await (await (fetch('http://localhost:3004/courses', options)))).json();
};
let updateCourse = async function (course) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    };
    return await (await (await (fetch('http://localhost:3004/courses/'+course.id, options)))).json();
};

export default {
    getAllCourses,
    saveCourse,
    updateCourse
}