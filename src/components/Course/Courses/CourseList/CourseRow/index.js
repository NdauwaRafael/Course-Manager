/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React from 'react';
import {Link} from "react-router-dom";

export default  ({course})=>
    <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.category.name}</td>
        <td>{course.author.name}</td>
        <td>
            <Link to={'/course/'+course.id}>
                <button
                    className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
                    show
                </button>

            </Link>
        </td>
    </tr>