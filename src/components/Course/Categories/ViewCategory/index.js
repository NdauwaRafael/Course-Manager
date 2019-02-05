/**
 * Created by Raphael Karanja on 2019-02-05.
 */
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import categoryActions from '../../../../CourseAppStore/actions/CategoryActions'

class ViewCategory extends Component {
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

const getCategoryByID = (categories, id)=>{
    let pageCategory = categories.filter(category=>parseInt(category.id) === parseInt(id));
    if (pageCategory.length > 0){
        return pageCategory[0];
    }
    return {}
};

ViewCategory.propTypes = {
    category: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
    let category =  {};
    let categoryId = ownProps.match.params.id;
    if(categoryId && state.categories.length > 0){
        category = getCategoryByID(state.categories, categoryId)
    }
    return {
        category: category
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewCategory)