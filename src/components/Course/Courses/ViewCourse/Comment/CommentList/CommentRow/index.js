/**
 * Created by Raphael Karanja on 2019-02-04.
 */
import React from 'react';

export default ({comment})=>{
    return (
        <div>
            <div
                className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-grey-dark flex items-center">
                        {comment.created_at}
                    </p>
                    <p className="text-grey-darker text-base">{comment.comment}</p>
                </div>

            </div>
        </div>
    )
}