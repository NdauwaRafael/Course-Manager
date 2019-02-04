/**
 * Created by Raphael Karanja on 2019-02-04.
 */

import initialState from "../InitialState";
import * as types from "../../actions/ActionTypes";

export default (state = initialState.comments, action) => {
    switch (action.type) {
        case types.CREATE_COMMENT_SUCESS:
            return [
                ...state,
                Object.assign({}, action.comment)
            ];
        case types.LOAD_COMMENT_SUCCESS:
            console.log(action.comments, 'action.comments')
            return action.comments;
        default:
            return state;
    }
}