/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {createStore, applyMiddleware} from "redux";
import rootReducer from '../reducers/CourseReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default (initialState)=>{
    return createStore(
        initialState,
        rootReducer,
        applyMiddleware(reduxImmutableStateInvariant())
    )
}