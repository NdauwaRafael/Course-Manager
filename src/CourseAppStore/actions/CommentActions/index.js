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

export function loadCommentsSuccess(comments) {
    return {
        type: types.LOAD_COMMENT_SUCCESS,
        comments
    }
}


export function createComment(comment) {
    return function (dispatch) {
        dispatch(beginAjaxCall);
        return commentApi.saveComment(comment)
            .then(createdComment => {
                dispatch(createCommentSuccess(createdComment))
            })
            .catch(error => {
                throw (error)
            })
    }

};

export function loadComments(id) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return commentApi.loadCourseComments(id)
            .then(comments => {
                dispatch(loadCommentsSuccess(comments))
            })
            .catch(error => {
                throw (error);
            })
    }
}