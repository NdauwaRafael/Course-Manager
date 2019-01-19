/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import { Route, IndexRoute} from  'react-router';
import App from '../components/App';
import HomePage from '../components/Home';
import AboutPage from '../components/About';

export default (
    <Route path='/' component={App}>
        <IndexRoute  component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
)