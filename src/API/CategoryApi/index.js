/**
 * Created by Raphael Karanja on 2019-01-28.
 */
const getAllCategories =  async function () {
    return await (await (await (fetch('http://localhost:3004/categories')))).json();
};

export default {
    getAllCategories
}