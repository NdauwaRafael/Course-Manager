/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../../CourseAppStore/actions/CourseActions';
import {bindActionCreators} from "redux";
import CourseList from './CourseList'

class CoursesPage extends Component {
    constructor(props, context) {
        super(props);
    };


    render() {
        const {courses} = this.props;
        return (
            <div>
                <div className="text-grey-dark flex items-center mb-5">
                    Courses
                </div>
                <div className="mb-5">
                    <CourseList courses={courses}/>
                </div>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
};

const mapDispatchToProps = (dispatch)=>{
        return {
            actions: bindActionCreators(courseActions, dispatch)
        }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);