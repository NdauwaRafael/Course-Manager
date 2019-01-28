/**
 * Created by Raphael Karanja on 2019-01-28.
 */
import React from 'react'
import TextInput from '../../../../Common/Form/Input';
import TextArea from '../../../../Common/Form/Textarea';
const CourseForm = (props) => {
    return (
        <div>
            <form className="w-full max-w-md">
                <TextInput
                name="title"
                value={course.title}
                label="Title"
                onChange={onChange}
                error={errors.title}/>

                
            </form>
        </div>
    )
}

export default CourseForm;