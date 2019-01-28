/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import * as types from '../ActionTypes'
import courseAPI from  '../../../API/CoursesApi';

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
export function createCoursesSuccess(course) {
    return {
        type: types.CREATE_COURSES_SUCCESS,
        course
    }
}
export function updateCoursesSuccess(course) {
    return {
        type: types.UPDATE_COURSES_SUCCESS,
        course
    }
}
export function createCourse(course) {
    return function (dispatch) {
        return courseAPI.createCourse(course)
            .then(savedCourse=>{
                course.id ? dispatch(updateCoursesSuccess(savedCourse)) :
                dispatch(createCoursesSuccess(savedCourse))
            })
            .catch(error=>{
                throw (error);
            })
    }
}



