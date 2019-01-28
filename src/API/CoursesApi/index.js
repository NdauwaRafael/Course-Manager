/**
 * Created by Raphael Karanja on 2019-01-25.
 */
let getAllCourses =  async function () {
    return await (await (await (fetch('http://localhost:3004/courses')))).json();
   // return fetch('http://localhost:3004/courses')
};
let getAllCategories =  async function () {
    return await (await (await (fetch('http://localhost:3004/categories')))).json();
   // return fetch('http://localhost:3004/courses')
};

export default {
    getAllCourses,
    getAllCategories
}