/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {combineReducers} from 'redux';
import Courses from './CourseReducer'

const rootReducer = combineReducers({
    Courses
});

export default rootReducer;