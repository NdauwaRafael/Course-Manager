/**
 * Created by Raphael Karanja on 2019-01-28.
 */
import * as types from '../../actions/ActionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case types.CREATE_AUTHOR:
            return [
                // ...state,
                // Object.assign({}, action.author)
            ];
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}