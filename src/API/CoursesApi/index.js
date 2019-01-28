/**
 * Created by Raphael Karanja on 2019-01-25.
 */
let getAllCourses =  async function () {
    return await (await (await (fetch('http://localhost:3004/courses')))).json();
};
let createCourse = function (course) {

}

export default {
    getAllCourses,
    createCourse
}