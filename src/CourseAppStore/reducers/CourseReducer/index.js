/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import * as types from '../../actions/ActionTypes'
import initialState from '../InitialState'

export default (state = initialState.courses, action) => {
    switch (action.type) {
        case types.CREATE_COURSES_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSES_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}