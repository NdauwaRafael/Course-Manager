/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import CoursesPage from '../components/Course/Courses';

export default (
    <Switch>
        <Route path="/" component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
    </Switch>
)