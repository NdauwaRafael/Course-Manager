/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React from 'react';
import {Link} from "react-router-dom";

export default  ({course})=>
    <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.category && course.category.name}</td>
        <td>{course.author && course.author.name}</td>
        <td>

            <div className="inline-flex">
                <Link to={'/course/'+course.id} className="bg-transparent hover:bg-green text-green-dark hover:text-green-lightest font-bold py-2 px-4 rounded">
                    Show
                </Link>
            </div>
        </td>
    </tr>