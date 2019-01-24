/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {combineReducers} from 'redux';
import courses from './CourseReducer'

const rootReducer = combineReducers({
    courses
});

export default rootReducer;