/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import rootReducer from '../reducers';
import {createStore} from "redux";

const configureStore = (initialState)=>{
    return createStore(
        rootReducer
    );
};
export default configureStore;


