/**
 * Created by Raphael Karanja on 2019-01-25.
 */
let getAllCourses =  async function () {
    return await (await (await (fetch('http://localhost:3004/courses')))).json();
};
let saveCourse = async function (course) {
    let options = {
        method: course.id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    };
    return await (await (await (fetch('http://localhost:3004/courses', options)))).json();
};

export default {
    getAllCourses,
    saveCourse
}