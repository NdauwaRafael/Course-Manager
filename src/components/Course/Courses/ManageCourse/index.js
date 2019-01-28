/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React, {Component} from 'react';
import * as courseActions from '../../../../CourseAppStore/actions/CourseActions';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {alert, confirm} from "notie";
import AddCourse from './CourseForm'

class ManageCourses extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {
                title: '',
                category: '',
                author: '',
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
        const {allAuthors, errors} = this.props;
        const {course} = this.state;
        return (
            <div>
                <h1>
                    Manage Page
                </h1>
                <AddCourse onChange={this.handleChange}
                           course={course}
                           allAuthors={allAuthors}
                           onSave={this.onSave}
                           errors={errors}/>
            </div>
        );
    }
}
ManageCourses.propTypes = {
    // course: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps)=> {
    return {
        course: state.course
    }
};
const mapDispatchToProps = (dispatch)=> {
return {
    actions: bindActionCreators(courseActions, dispatch)
}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCourses)