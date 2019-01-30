/**
 * Created by Raphael Karanja on 2019-01-24.
 */
import * as types from '../ActionTypes'
import courseAPI from '../../../API/CoursesApi';

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function loadCourses() {
    return function (dispatch) {
        return courseAPI.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses))
            }, error => {

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
        if (course.id) {
            return courseAPI.updateCourse(course)
                .then(updatedCourse => {
                    dispatch(updateCoursesSuccess(updatedCourse))
                })
                .catch(error => {
                    throw (error);
                })
        } else {
            return courseAPI.saveCourse(course)
                .then(savedCourse => {
                    dispatch(createCoursesSuccess(savedCourse))
                })
                .catch(error => {
                    throw (error);
                })
        }
    }
}



