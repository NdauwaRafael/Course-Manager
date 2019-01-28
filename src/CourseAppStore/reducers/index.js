/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {combineReducers} from 'redux';
import courses from './CourseReducer';
import authors from './AuthorReducer'

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;