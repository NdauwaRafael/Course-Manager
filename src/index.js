import React from 'react';
import './assets/css/file.scss';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {loadCourses} from './CourseAppStore/actions/CourseActions'
import {loadComments} from './CourseAppStore/actions/CommentActions'
import {loadAuthors} from './CourseAppStore/actions/AuthorActions'
import {loadCategories} from './CourseAppStore/actions/CategoryActions';
import configureStore from './CourseAppStore/configureSore';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadCategories());
store.dispatch(loadComments());


render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

