/**
 * Created by Raphael Karanja on 2019-01-31.
 */
import * as types from '../../actions/ActionTypes';
import initialStates from '../InitialState';

export default (state = initialStates.ajaxCallsInProgress, action)=> {
    if(action.type === types.BEGIN_AJAX_CALL){
        return state + 1;
    }

    return state;
}