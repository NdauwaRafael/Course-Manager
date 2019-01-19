/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router'
export default (props)=>
    <nav>
        <IndexLink to="/" activeClassName="active" >Home</IndexLink>
        <Link to="/about" activeClassName="active">About</Link>
    </nav>