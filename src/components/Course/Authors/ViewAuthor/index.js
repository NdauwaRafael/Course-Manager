/**
 * Created by Raphael Karanja on 2019-02-05.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CourseList from "../../Courses/CourseList";
class ViewAuthor extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {courses, author} = this.props;
        return(
            <div>
                <p className="text-xl leading-tight"> {author.name}<span className="text-grey-dark text-sm"> | Courses</span></p>
                <div className="mb-5 mt-4">
                    <CourseList courses={courses}/>
                </div>
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
            author: author,
            courses: courses
        }
};

const mapDispatchToProps = (dispatch)=>{

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAuthor)