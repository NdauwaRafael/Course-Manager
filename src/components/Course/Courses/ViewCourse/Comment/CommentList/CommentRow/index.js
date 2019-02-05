/**
 * Created by Raphael Karanja on 2019-02-04.
 */
import React from 'react';

export default ({comment})=>{
    return (
        <div className="max-w-lg lg:flex shadow-inner mb-4 p-1 rounded-lg border-b border-grey-light" >
            <div className="flex-none text-grey-dark text-center items-center justify-center flex flex-col text-2xl">
                <i className="fa fa-comments-o text-2xl" aria-hidden="true"> </i>
            </div>
            <div
                className="max-w-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r pl-4 p-1 flex flex-col justify-between leading-normal ">
                <div className="mb-2">
                    <p className="text-xs text-grey-dark flex items-center">
                        {comment.created_at}
                    </p>
                    <p className="text-grey-darker text-base">{comment.comment}</p>
                </div>

                <div className="flex items-center lg:flex items-end items-stretch justify-start">
                    <div className="text-sm flex ">
                        <p className="mr-2 text-teal-light">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"> </i>
                        </p>
                        <p className="mr-2 text-teal-light">
                            <i className="fa fa-heart-o" aria-hidden="true"> </i>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}