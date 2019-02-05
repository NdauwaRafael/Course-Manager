/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'
import {Link} from "react-router-dom";

const AuthorRow = ({author}) => {
    return (
    <Link to={'/authors/'+author.id} className="w-1/3 px-4 mb-4 " >
        <div className=" rounded overflow-hidden shadow-lg " >
            <img className="w-full" src={author.picture} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-grey-darker">{author.name}</div>
                    <div className="text-grey-darker text-base">
                        <div className="flex items-center mb-2">
                                <div className="text-sm">
                                    <p className="text-black leading-none">Name</p>
                                    <p className="text-grey-dark">{author.name}</p>
                                </div>
                        </div>

                        <div className="flex items-center mb-2">
                                <div className="text-sm">
                                    <p className="text-black leading-none">Email</p>
                                    <p className="text-grey-dark">{author.email}</p>
                                </div>
                        </div>
                        <div className="flex items-center mb-2">
                                <div className="text-sm">
                                    <p className="text-black leading-none">Phone</p>
                                    <p className="text-grey-dark">{author.phone}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <span
                        className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#{author.website}</span>
                    <span
                        className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#{author.website}</span>
                    <span
                        className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#{author.website}</span>
                </div>
        </div>
    </Link>
    )
}

export default AuthorRow;