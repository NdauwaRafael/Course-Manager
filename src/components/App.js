import React, {Component} from 'react';
import Header from './Layout/Header';
import Routes from '../routes';
import Spinner from './Common/Loaders/Spinner';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container-fluid">
                <Header loading={loading}/>
                <div className="container mx-auto pt-10">
                    {
                        Routes
                    }
                </div>
                {loading && <Spinner/>}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxStatusReducer > 0
    }
};
export default withRouter (
    connect(mapStateToProps)(App)
);
