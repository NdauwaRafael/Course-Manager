/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {confirm, alert} from 'notie';
import * as courseActions from '../../../CourseAppStore/actions/CourseActions';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            course: {
                title: '',
                category: '',
                description: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    };

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let course = this.state.course;
        course[field] = value;
        this.setState({course});
    };

    onSave() {
        const {course} = this.state;
        confirm({
            text: 'Are you sure you want to do that?<br><b>That\'s a bold move...</b>',
            cancelCallback: () => {
                alert({type: 3, text: 'Aw, why not? :(', time: 2})
            },
            submitCallback: () => {
                this.props.createCourse(course)
            }
        })
    };

    courseRow(course, index) {
        return (
            <tr key={index}>
                <td>{course.title}</td>
                <td>{course.category}</td>
                <td>
                    <button
                        className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
                        show
                    </button>
                </td>
            </tr>
        )
    }


    render() {
        const {course} = this.state;
        const {courses} = this.props;
        return (
            <div>
                <div className="text-grey-dark flex items-center mb-5">
                    Courses
                </div>
                <div className="mb-5">
                    <table className="w-full text-left table-collapse">
                        <thead>
                        <tr>
                            <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Title</th>
                            <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Category</th>
                            <th className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Action</th>
                        </tr>
                        </thead>
                        <tbody className="align-baseline">
                        {
                            courses.map(this.courseRow)
                        }
                        </tbody>
                    </table>
                </div>
                <div className="text-black font-bold text-xl mb-5">Add a Course</div>
                <form className="w-full max-w-md">
                    <div className="flex flex-wrap -mx-3 mb-10">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Title
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Introduction to Redux"
                                name="title"
                                onChange={this.handleChange}
                                value={course.title}/>
                            <p className="text-red text-xs italic">Please fill out this field.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-10">
                        <div className="w-full px-3 ">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Category
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                id="grid-last-name"
                                type="text"
                                name="category"
                                placeholder="Programming"
                                onChange={this.handleChange}
                                value={course.category}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-10">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Description
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                id="grid-password"
                                placeholder="This is a demo description of a course."
                                name="description"
                                onChange={this.handleChange}
                                value={this.state.course.description}/>
                            <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div>
                            <button
                                className="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={this.onSave}>
                                Add Now!!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
};

const mapDispatchToProps = (dispatch)=>{
        return {
            createCourse: course => dispatch(courseActions.createCourse(course))
        }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);