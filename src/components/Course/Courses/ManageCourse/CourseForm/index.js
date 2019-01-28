/**
 * Created by Raphael Karanja on 2019-01-28.
 */
import React from 'react'
import TextInput from '../../../../Common/Form/Input';
import SelectInput from '../../../../Common/Form/Select'
import TextArea from '../../../../Common/Form/Textarea';
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <div>
            <form className="w-full max-w-md">
                <TextInput
                    name="title"
                    value={course.title}
                    label="Title"
                    onChange={onChange}
                    error={errors.title}/>

                <SelectInput
                    name="author"
                    value={course.author}
                    label="Author"
                    defaultOption="Select Author"
                    options={allAuthors}
                    onChange={onChange}
                    error={errors.authorId}/>

                <TextInput
                    name="category"
                    value={course.category}
                    label="Category"
                    onChange={onChange}
                    error={errors.category}/>

                <TextArea
                    name="description"
                    value={course.description}
                    label="Description"
                    onChange={onChange}
                    error={errors.description}/>

                <button
                    className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                onClick={onSave}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default CourseForm;