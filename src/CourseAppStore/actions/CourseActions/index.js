/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import * as types from '../ActionTypes'
import courseAPI from  '../../../API/CoursesApi';

export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course
    }
}

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function loadCourses() {
    return function (dispatch) {
        return courseAPI.getAllCourses()
            .then(courses=>{
                dispatch(loadCoursesSuccess(courses))
            }, error=>{

            })
    }
}



