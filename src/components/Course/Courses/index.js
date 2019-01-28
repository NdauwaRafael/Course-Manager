/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {confirm, alert} from 'notie';
import * as courseActions from '../../../CourseAppStore/actions/CourseActions';
import {bindActionCreators} from "redux";
import CourseList from './CourseList'

class CoursesPage extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            course: {
                title: '',
                category: '',
                description: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    };

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let course = this.state.course;
        course[field] = value;
        this.setState({course});
    };

    onSave() {
        const {course} = this.state;
        confirm({
            text: 'Are you sure you want to do that?<br><b>That\'s a bold move...</b>',
            cancelCallback: () => {
                alert({type: 3, text: 'Aw, why not? :(', time: 2})
            },
            submitCallback: () => {
                this.props.actions.createCourse(course);
            }
        })
    };



    render() {
        const {course} = this.state;
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