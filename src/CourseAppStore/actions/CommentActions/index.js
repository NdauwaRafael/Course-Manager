/**
 * Created by Raphael Karanja on 2019-02-04.
 */
import commentApi from '../../../API/CommentApi'
import {beginAjaxCall} from '../AjaxStatusActions';
import * as types from "../ActionTypes";


export function createCommentSuccess(comment) {
    return {
        type: types.CREATE_COMMENT_SUCESS,
        comment
    }
}


export function createComment(){
    return function (dispatch) {
        dispatch(beginAjaxCall);
        return commentApi.saveComment()
            .then(createdComment=>{
                dispatch(createCommentSuccess(createdComment))
            })
            .catch(error=>{
                throw (error)
            })
    }

}