/**
 * Created by Raphael Karanja on 2019-02-04.
 */

import initialState from "../InitialState";
import * as types from "../../actions/ActionTypes";

export default (state = initialState.comments, action) => {
    switch (action.type) {
        case types.CREATE_COMMENT_SUCESS:
            return [
                ...comments,
                Object.assign({}, action.comment)
            ];
        case types.LOAD_COMMENT_SUCCESS:
            return action.comments;
        default:
            return state;
    }
}