/**
 * Created by Raphael Karanja on 2019-01-31.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Spinner from "../../Common/Loaders/Spinner";


class Footer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    };

    render() {
        const {loading} = this.props;
        return (
            <div>
                {loading && <Spinner/>}
            </div>
        );
    }
}

Footer.propTypes = {
    loading: PropTypes.bool.isRequired,
};


const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxCallsInProgress > 0
    }
};

export default connect(
    mapStateToProps
)(Footer)