/**
 * Created by Raphael Karanja on 2019-02-05.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CourseList from "../../Courses/CourseList";
import AuthorRow from "../AuthorList/AuthorRow";
class ViewAuthor extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {courses, author} = this.props;
        return(
        <div className="w-full flex lg:flex">
            <div
                className="h-48 lg:w-2/5 lg:h-auto rounded-t lg:rounded-t-none lg:rounded-l">
                <AuthorRow key={author.id} author={author} />
            </div>
            <div
                className=" bg-white lg:w-3/5 rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
                <p className="text-xl leading-tight mb-4"> {author.name}<span className="text-grey-dark text-sm"> | Courses</span></p>
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
        return pageCourses
    }

    return []
}
const mapStateToProps = (state, ownProps)=>{
            let author = {};
            let courses = [];
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



export default connect(
    mapStateToProps
)(ViewAuthor)