/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React, {Component} from 'react';
// import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AuthorList from './AuthorList'

class Authors extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    };

    render() {
        const {authors} = this.props
        return (
            <div>
                <AuthorList authors={authors} />
            </div>
        );
    }
}

Authors.propTypes = {
    authors: PropTypes.array.isRequired,
    // actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        authors: state.authors
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
)(Authors)