/**
 * Created by Raphael Karanja on 2019-02-01.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentForm from './Comment/CommentForm';
import {bindActionCreators} from "redux";
import * as commentActions from "../../../../CourseAppStore/actions/CommentActions";
import {alert} from "notie";
import CommentList from './Comment/CommentList';
import moment from 'moment';
import {Link} from 'react-router-dom';


class ViewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {
                comment: ''
            },
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    };

    // componentWillMount() {
    //     const store = configureStore();
    //     store.dispatch(loadComments(this.props.match.params.id));
    // }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.course)
            })
        }
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let comment = Object.assign({}, this.state.comment);
        comment[field] = value;
        return this.setState({comment});
    }

    commentIsValid() {
        let {comment, errors} = this.state;
        let isValid = true;

        if (comment.comment.length <= 2) {
            errors.comment = 'Comment is too short. Comment should be at least 2 characters long';
            isValid = false;
        } else {
            errors.comment = ''
        }
        this.setState({errors});
        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.commentIsValid()) {
            return;
        }
        let {comment} = this.state;
        comment.courseId = this.props.course.id;
        comment.created_at = new Date();
        this.props.actions.createComment(comment)
            .then(() => {
                alert({type: 'success', text: 'Success, Comment was added successfully :)', time: 2});
                return this.setState({
                    comment: {comment: ''}
                });
            })
            .catch(() => {
                alert({type: 3, text: 'Oops!!, An Error occurred while adding comment :(', time: 2})
            })
    }


    render() {
        const {course, comments} = this.props;
        const {author, category} = course;
        const {comment, errors} = this.state;
        return (
            <div>
                <div className="w-full lg:flex">
                    <div
                        className=" bg-white rounded-b lg:rounded-b-none lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-grey-dark flex items-center">
                                <svg className="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 15 15">
                                    <path
                                        d="M13.989,5.322c-0.864-0.45-1.92-0.536-2.809-0.271c-0.742,0.218-1.389,0.63-1.867,1.184   c-0.01,0.002-0.02,0.001-0.03,0.003C9.29,6.242,9.295,6.246,9.302,6.251c-0.01,0.012-0.02,0.024-0.029,0.036   c-0.004-0.005-0.008-0.01-0.012-0.014C9.288,6.219,9.32,6.168,9.349,6.115c0.586-0.584,1.156-1.073,1.75-1.428   c0.613-0.369,1.233-0.567,1.887-0.613c0.654-0.047,1.354,0.055,2.088,0.24c0.736,0.18,1.489,0.449,2.333,0.671   c-0.468-0.736-1.105-1.331-1.87-1.78c-0.762-0.44-1.688-0.727-2.662-0.655c-0.974,0.061-1.923,0.535-2.547,1.219   C10.129,3.987,9.957,4.222,9.81,4.468c0.014-0.146,0.033-0.292,0.031-0.441C9.837,3.101,9.448,2.114,8.767,1.418   C8.092,0.712,7.212,0.305,6.352,0.122C5.484-0.057,4.611-0.042,3.771,0.191C4.547,0.59,5.286,0.895,5.954,1.255   c0.668,0.354,1.257,0.746,1.711,1.219C8.12,2.946,8.448,3.508,8.656,4.193C8.825,4.741,8.919,5.348,8.972,6.01   c-0.136-0.675-0.47-1.315-0.957-1.856c-0.618-0.69-1.562-1.172-2.534-1.241C4.509,2.832,3.58,3.111,2.815,3.544   C2.046,3.986,1.404,4.576,0.929,5.307C1.774,5.091,2.53,4.83,3.268,4.656c0.734-0.178,1.435-0.274,2.089-0.221   C6.01,4.486,6.628,4.689,7.238,5.064c0.318,0.193,0.629,0.428,0.939,0.692C7.849,5.723,7.5,5.78,7.202,5.937   c-0.396,0.2-0.688,0.529-0.881,0.879C6.13,7.17,6.022,7.55,6.012,7.946c0.275-0.284,0.505-0.565,0.75-0.808   C7.003,6.894,7.251,6.69,7.516,6.554C7.78,6.419,8.068,6.35,8.393,6.35c0.132-0.001,0.272,0.015,0.413,0.033   C8.522,6.771,8.26,7.176,8.024,7.595c-0.549,0.98-0.986,2.025-1.351,3.091s-0.659,2.158-0.898,3.262   c-0.237,1.113-0.265,3.207-0.384,4.389l2.545-0.002c-0.096-1.002-0.285-3.104-0.266-4.158c0.021-1.066,0.095-2.135,0.239-3.193   c0.146-1.059,0.362-2.111,0.696-3.13c0.146-0.442,0.321-0.878,0.52-1.303c0.088-0.021,0.173-0.04,0.259-0.06   c0.021,0.005,0.041,0.008,0.063,0.013C9.442,6.496,9.435,6.489,9.429,6.482C9.484,6.469,9.54,6.456,9.594,6.444   c0.202,0.137,0.39,0.277,0.542,0.432c0.229,0.229,0.384,0.481,0.476,0.765c0.092,0.282,0.123,0.603,0.121,0.946   c0.001,0.344-0.035,0.704-0.042,1.101c0.273-0.288,0.466-0.632,0.581-1.018c0.11-0.384,0.137-0.823-0.002-1.244   c-0.132-0.422-0.444-0.788-0.813-0.988c-0.079-0.043-0.16-0.077-0.243-0.108c0.398-0.063,0.781-0.098,1.15-0.095   c0.716,0,1.349,0.151,1.933,0.45c0.584,0.298,1.13,0.747,1.662,1.284c0.537,0.536,1.044,1.154,1.65,1.782   c-0.021-0.872-0.258-1.711-0.681-2.491C15.504,6.488,14.86,5.764,13.989,5.322z"
                                        data-original="#030104"/>
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

                        <div className="flex justify-end w-full">
                            <div className="inline-flex">
                                <Link
                                    to={'/course/edit/'+course.id}
                                    className="bg-transparent hover:bg-blue text-blue-light hover:text-blue-lightest font-bold py-2 px-4 rounded-l">
                                    Edit
                                </Link>
                                <button
                                    className="hover:bg-red text-red-light hover:text-red-lightest font-bold py-2 px-4 rounded-r">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <CommentForm
                    comment={comment}
                    error={errors}
                    onChange={this.handleChange}
                    onSave={this.onSave}
                />

                <CommentList comments={comments} />

            </div>
        );
    }
}

const getCourseById = (courses, id) => {
    let course = courses.filter(course => parseInt(course.id) === parseInt(id));
    if (course.length > 0) {
        return course[0]
    }
    return null
};

const formatDate = (date) => {
    // let today = new Date(today);
    // let dd = today.getDate();
    // let mm = today.getMonth() + 1;
    // let yyyy = today.getFullYear();
    // if (dd < 10) {
    //     dd = '0' + dd;
    // }
    //
    // if (mm < 10) {
    //     mm = '0' + mm;
    // }
    //
    // today = dd+'/'+mm+'/'+yyyy;
    //
    // return today

    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};
const getCommentsByCourseId = (comments, id) => {
    let mycomments = comments.filter(comment => parseInt(comment.courseId) === parseInt(id));
    if (mycomments.length > 0) {
        return mycomments.map(comment => ({
            comment: comment.comment,
            created_at: formatDate(comment.created_at),
            id: comment.id
        }));
    }
    return [];
}

const mapStateToProps = (state, ownProps) => {
    let course = {
        author: {},
        category: {}
    };
    let comments = [];
    let courseId = ownProps.match.params.id;

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
        comments = getCommentsByCourseId(state.comments, courseId);
    }
    return {
        course: course,
        comments: comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(commentActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewCourse)