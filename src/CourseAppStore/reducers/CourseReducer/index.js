/**
 * Created by Raphael Karanja on 2019-01-24.
 */
export default (state=[], action)=>{
    switch (action.type) {
        case 'CREATE_COURSE':
                return [
                    ...state,
                    Object.assign({}, action.course )
                ];
        default:
            return state;
    }
}