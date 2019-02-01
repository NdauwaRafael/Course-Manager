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
                <Link to={'/course/edit/'+course.id} className="bg-transparent hover:bg-blue text-blue-light hover:text-blue-lightest font-bold py-2 px-4 rounded">
                    Edit
                </Link>
                <Link to={'/course/'+course.id} className="bg-transparent hover:bg-red text-red-light hover:text-red-lightest font-bold py-2 px-4 rounded">
                    Delete
                </Link>
            </div>

            {/*<Link to={'/course/'+course.id}>*/}
                {/*<button*/}
                    {/*className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">*/}
                    {/*show*/}
                {/*</button>*/}
            {/*</Link>*/}
        </td>
    </tr>