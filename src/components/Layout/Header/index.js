/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import {Link} from 'react-router-dom'
export default props =>
    <nav>
        <Link to="/" activeClassName="active" >Home</Link>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/courses" activeClassName="active">Courses</Link>
    </nav>