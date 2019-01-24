/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {createStore, applyMiddleware} from "redux";
import rootReducer from '../reducers/CourseReducer';

export default (initialState)=>{
    return createStore(
        initialState,
        rootReducer
    )
}