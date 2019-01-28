import React from 'react';
import './assets/css/file.scss';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {loadCourses} from './CourseAppStore/actions/CourseActions'
import {loadAuthors} from './CourseAppStore/actions/AuthorActions'
import configureStore from './CourseAppStore/configureSore';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

