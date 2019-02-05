/**
 * Created by Raphael Karanja on 2019-02-04.
 */
const saveComment =  async function (comment) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    };
    return await (await (await (fetch('http://localhost:3004/comments', options)))).json();
};

const loadCourseComments = async function () {
    return await (await (await (fetch('http://localhost:3004/comments?_sort=created_at&_order=desc')))).json()
}



export default {
    saveComment,
    loadCourseComments
}