/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'
import AuthorRow from "./AuthorRow";

const AuthorList = ({authors}) => {
    return (
        <div>
            <table className="w-full text-left table-collapse">
                <thead>
                <tr>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Title</th>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Category</th>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Author</th>
                    <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Action</th>
                </tr>
                </thead>
                <tbody className="align-baseline">
                {
                    authors.map(author=><AuthorRow  author={author} />)
                }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;