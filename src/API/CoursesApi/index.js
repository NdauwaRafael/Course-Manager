/**
 * Created by Raphael Karanja on 2019-01-25.
 */
let getAllCourses =  async function () {
    return await (await (await (fetch('http://localhost:3004/courses?_expand=categories')))).json();
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

export default {
    getAllCourses,
    saveCourse
}