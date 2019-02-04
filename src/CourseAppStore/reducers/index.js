/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import {combineReducers} from 'redux';
import courses from './CourseReducer';
import authors from './AuthorReducer';
import categories from './CategoriesReducer';
import comments from './CommentsReducer';
import ajaxStatusReducer from './AjaxStatusReducer'

const rootReducer = combineReducers({
    courses,
    authors,
    categories,
    comments,
    ajaxStatusReducer
});

export default rootReducer;