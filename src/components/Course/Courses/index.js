/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            course: {
                title: null
            }
        }
    };

    render() {
        return (
            <div>
                <div className="text-grey-dark flex items-center mb-5">
                    Courses
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
                                onChange={this.onChange}
                                value={this.course.title}/>
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
                                placeholder="Programming"
                                onChange={this.onChange}
                                value={this.course.category}/>
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
                                onChange={this.onChange}
                                value={this.course.description}/>
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
