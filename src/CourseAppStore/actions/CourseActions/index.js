/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import * as types from '../ActionTypes'
export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course
    }
};


