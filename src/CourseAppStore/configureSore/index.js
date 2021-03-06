/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import rootReducer from '../reducers';
import {createStore, applyMiddleware} from "redux";
import reduxImmutableStatateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const configureStore = (initialState)=>{
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStatateInvariant())
    );
};
export default configureStore;


