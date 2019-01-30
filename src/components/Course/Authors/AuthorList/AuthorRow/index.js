/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'
import {Link} from "react-router-dom";

const AuthorRow = ({author}) => {
    return (
        <tr key={author.id}>
            <td><img src={author.picture} alt="AuthorImg"/></td>
            <td>{author.name}</td>
            <td>{author.username}</td>
            <td>{author.email}</td>
            <td>{author.phone}</td>
            <td>
                <Link to={'/author/'+author.id}>
                    <button
                        className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
                        show
                    </button>

                </Link>
            </td>
        </tr>
    )
}

export default AuthorRow;