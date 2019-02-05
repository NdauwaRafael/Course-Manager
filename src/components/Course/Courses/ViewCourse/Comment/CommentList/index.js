/**
 * Created by Raphael Karanja on 2019-02-04.
 */
import React from 'react';
import CommentRow from './CommentRow'
export default ({comments})=>{
    return (
        <div className="w-full">
            {
                comments.map(comment=><CommentRow key={comment.id} comment={comment}/>)
            }
        </div>
    )
}