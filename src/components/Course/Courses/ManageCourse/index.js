/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React, {Component} from 'react';
import * as courseActions from '../../../../CourseAppStore/actions/CourseActions';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class ManageCourses extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {

        }
    };

    render() {
        return (
            <div>
                <h1>
                    Manage Page
                </h1>
            </div>
        );
    }
}
ManageCourses.propTypes = {
    course: PropTypes.array.isRequired,
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