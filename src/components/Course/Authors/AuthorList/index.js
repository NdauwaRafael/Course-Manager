/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'
import AuthorRow from "./AuthorRow";

const AuthorList = ({authors}) => {
    return (
        <div className="flex mb-4 flex-wrap -mx-4">
            {
                authors.map(author=><AuthorRow key={author.id} author={author} />)
            }
        </div>
    )
}

export default AuthorList;