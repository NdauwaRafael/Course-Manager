/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React, {Component} from 'react';
// import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CategoryList from './CategoriesList'


class Courses extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    };


    render() {
        const {categories} = this.props
        return (
            <div>
                <CategoryList categories={categories}/>
            </div>
        );
    }
}

Courses.propTypes = {
    categories: PropTypes.array.isRequired,
    //actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories
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