/**
 * Created by Raphael Karanja on 2019-02-01.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import TextArea from "../../../Common/Form/Textarea";

class ViewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {},
            error: {}
        }
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.course)
            })
        }
    }

    handleChange(event){
        let field = event.target.name;
        let value = event.target.value;
        let comment = Object.assign({}, this.state.comment);
        comment[field] = value;
        return this.setState({comment});
    }

    onSave(){

    }
    render() {
        const {course} = this.props;
        const {author, category} = course;
        const {comment, error} = this.state;
        return (
            <div>
            <div className="w-full lg:flex">
                <div
                    className=" bg-white rounded-b lg:rounded-b-none lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-grey-dark flex items-center">
                            <svg className="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                            </svg>
                            <span>
                                {category.name}
                            </span>
                        </p>
                        <div className="text-black font-bold text-xl mb-2">{course.title}</div>
                        <p className="text-grey-darker text-base">
                            {
                                course.description
                            }
                        </p>
                    </div>
                    <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-black leading-none">
                                    {author.name}
                                </p>
                                <p className="text-grey-dark text-xs">
                                    {author.email}
                                </p>
                            </div>
                    </div>
                </div>
            </div>


                <div className="w-full lg:flex">
                    <div
                        className="w-full max-w-lg border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-grey-dark flex items-center">
                                <svg className="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                                </svg>
                                <span>
                                Leave a comment
                            </span>
                            </p>
                                <div className="w-full max-w-lg">
                                    <form className="w-full">
                                        <TextArea
                                            name="comment"
                                            value={comment.comment}
                                            label="Comment"
                                            onChange={this.handleChange}
                                            error={error.comment}/>

                                        <button
                                            className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
                                            type="submit"
                                            onClick={this.onSave}>
                                            Save
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
const getCourseById = (courses, id) => {
    let course = courses.filter(course => parseInt(course.id) === parseInt(id));
    if (course.length > 0){
        return course[0]
    }
    return null
};

const mapStateToProps = (state, ownProps) => {
    let course = {
        author: {},
        category: {}
    };
    let courseId = ownProps.match.params.id;

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    return {
        course: course
    }
};

export default connect(
    mapStateToProps
)(ViewCourse)