/**
 * Created by Raphael Karanja on 2019-02-05.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
class ViewAuthor extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}

const getAuthorById = (authors, id)=>{
    let pageAuthor = authors.filter(author=>parseInt(author.id) === parseInt(id));
    if(pageAuthor.length > 0){
        return pageAuthor[0]
    }
    return {};
};

const getCoursesByAuthorId = (courses, id)=>{
    let pageCourses = courses.filter(course => parseInt(course.authorId) === parseInt(id));
    if (pageCourses.length > 0){
        return pageCourses[0]
    }

    return []
}
const mapStateToProps = (state, ownProps)=>{
            let author = {};
            let courses = []
            let authorId = ownProps.match.params.id;
            if(authorId && state.authors){
                author = getAuthorById(state.authors, authorId);
                if(state.courses){
                    courses = getCoursesByAuthorId(state.courses, authorId)
                }
            }
        return {
            author: author
        }
};

const mapDispatchToProps = (dispatch)=>{

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAuthor)