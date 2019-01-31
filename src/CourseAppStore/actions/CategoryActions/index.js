import * as types from "../ActionTypes";
import categoryAPI from "../../../API/CategoryApi";
import {beginAjaxCall} from '../AjaxStatusActions';


/**
 * Created by Raphael Karanja on 2019-01-28.
 */
export function loadCategoriesSuccess(categories) {
    return {
        type: types.LOAD_CATEGORY_SUCCESS,
        categories
    }
}

export function loadCategories() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return categoryAPI.getAllCategories()
            .then(categories=>{
                dispatch(loadCategoriesSuccess(categories));
            }, error=>{
                throw (error)
            })
    }
}