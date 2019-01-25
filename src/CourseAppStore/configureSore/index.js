/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import rootReducer from '../reducers';
import {createStore, applyMiddleware} from "redux";
import reduxImmutableStatateInvariant from 'redux-immutable-state-invariant'

const configureStore = (initialState)=>{
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStatateInvariant)
    );
};
export default configureStore;


