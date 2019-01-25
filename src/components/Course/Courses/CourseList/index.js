/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React from 'react';
import CourseRow from './CourseRow'

export default ({courses}) => {
    return (
        <div>
            <table className="w-full text-left table-collapse">
                <thead>
                <tr>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Title</th>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Category</th>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Action</th>
                </tr>
                </thead>
                <tbody className="align-baseline">
                {
                    courses.map(course=><CourseRow key={course.id} course={course} />)
                }
                </tbody>
            </table>
        </div>
    )
}