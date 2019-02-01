/**
 * Created by Raphael Karanja on 2019-02-01.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'

class ViewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.course)
            })
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
const getCourseById = (courses, id) => {
    let course = courses.filter(course => parseInt(course.id) === parseInt(id));
    if (course.length > 0){
        return course[0]
    }
    return null
};

const mapStateToProps = (state, ownProps) => {
    let course = {};
    let courseId = ownProps.match.params.id;

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    return {
        course: course
    }
};

export default connect(
    mapStateToProps
)(ViewCourse)