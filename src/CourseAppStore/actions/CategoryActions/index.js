import * as types from "../ActionTypes";
import categoryAPI from "../../../API/CategoryApi";

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
        return categoryAPI.getAllCategories()
            .then(categories=>{
                dispatch(loadCategoriesSuccess(categories));
            }, error=>{
                throw (error)
            })
    }
}