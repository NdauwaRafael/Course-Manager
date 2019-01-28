/**
 * Created by Raphael Karanja on 2019-01-28.
 */

let getAllAuthors =  async function () {
    return await (await (await (fetch('http://localhost:3004/authors')))).json();
    // return fetch('http://localhost:3004/courses')
};

export default {
    getAllAuthors
}