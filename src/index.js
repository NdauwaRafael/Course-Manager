import React from 'react';
import  './assets/css/file.scss';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

import configureStore from './CourseAppStore/configureSore'
const store = configureStore();
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

