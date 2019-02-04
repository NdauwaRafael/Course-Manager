/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {


    render() {
        const {name, value, label, error, onChange, rows} = this.props;
        let validatorClass = '';
        if (error.length > 0) {
            validatorClass = 'border-red'
        }else{
            validatorClass= 'border-grey-lighter'
        }

        return (
            <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor={name}>{label}</label>
                    <textarea value={value}
                              rows={rows}
                              id={name}
                              name={name}
                              onChange={onChange}
                              className={"appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey" + validatorClass}
                              ref={name}
                              placeholder={label}/>
                    <small className="text-grey-dark text-xs italic">{error}</small>
                </div>

            </div>
        );

    }
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired

};

Textarea.defaultProps = {
    error: '',
    value: ''
};
export default Textarea;