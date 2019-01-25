/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import CoursesPage from '../components/Course/Courses';
import ManageCourse from '../components/Course/Courses/ManageCourse'

export default (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course" component={ManageCourse} />
        <Route path="/course/:id" component={ManageCourse} />
        <Route path="/courses" component={CoursesPage} />
    </Switch>
)