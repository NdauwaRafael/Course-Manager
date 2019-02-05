/**
 * Created by Raphael Karanja on 2019-02-04.
 */
import React from 'react';

export default ({comment})=>{
    return (
        <div className="w-full lg:flex shadow mb-4 p-1 rounded-lg" >
            <div className="flex-none text-grey-dark text-center items-center justify-center flex flex-col">
                <i className="fa fa-comments-o" aria-hidden="true"> </i>
            </div>
            <div
                className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="">
                    <p className="text-xs text-grey-dark flex items-center">
                        {comment.created_at}
                    </p>
                    <p className="text-grey-darker text-base">{comment.comment}</p>
                </div>

            </div>
        </div>
    )
}