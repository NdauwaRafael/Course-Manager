/**
 * Created by Raphael Karanja on 2019-01-28.
 */

import * as types from '../../actions/ActionTypes'
import initialState from '../InitialState'

export default (state = initialState.categories, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORY_SUCCESS:
            return action.categories;
        default:
            return state;
    }
}