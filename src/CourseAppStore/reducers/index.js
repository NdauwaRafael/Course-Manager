/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {combineReducers} from 'redux';
import courses from './CourseReducer';
import authors from './AuthorReducer';
import categories from './CategoriesReducer';
import ajaxStatusReducer from './AjuxStatusReducer'

const rootReducer = combineReducers({
    courses,
    authors,
    categories,
    ajaxStatusReducer
});

export default rootReducer;