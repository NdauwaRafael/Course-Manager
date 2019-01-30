/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class Courses extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    //actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(actionsName, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Courses)