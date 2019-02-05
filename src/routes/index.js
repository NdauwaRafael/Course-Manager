/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import CoursesPage from '../components/Course/Courses';
import ViewCoursePage from '../components/Course/Courses/ViewCourse'
import ManageCourse from '../components/Course/Courses/ManageCourse';
import CategoriesPage from '../components/Course/Categories'
import AuthorsPage from '../components/Course/Authors';
import ViewCategory from '../components/Course/Categories/ViewCategory'

export default (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course" exact component={ManageCourse} />
        <Route path="/course/:id" exact component={ViewCoursePage} />
        <Route path="/course/edit/:id" exact component={ManageCourse} />
        <Route path="/courses" exact component={CoursesPage} />
        <Route path="/categories" exact component={CategoriesPage} />
        <Route path="/categories/:id" exact component={ViewCategory} />
        <Route path="/authors" exact component={AuthorsPage} />
        <Route path="/author" exact component={AuthorsPage} />
    </Switch>
)