/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router'
export default (props)=>
    <nav>
        <IndexLink to="/" >Home</IndexLink>
        <Link to="/about">About</Link>
    </nav>