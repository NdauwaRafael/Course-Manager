/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import * as types from '../../actions/ActionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}