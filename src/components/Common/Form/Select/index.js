/**
 * Created by Raphael Karanja on 2019-01-25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

    render() {
        const {name, value, label, error, onChange, options, defaultOption} = this.props;
        let validatorClass = '';
        if (error.length > 0) {
            validatorClass = 'border-red'
        }else{
            validatorClass= 'border-grey-lighter'
        }

        return (
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor={name}>{label}</label>
                    <div className="relative">
                        <select
                            className={"block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" + validatorClass}
                            id={name}
                            value={value}
                            name={name}
                            ref={name}
                            onChange={onChange}>
                            <option value="">{defaultOption}</option>
                            {
                                options.map(option=>
                                    <option value={option}>
                                        {option}
                                    </option>)
                            }
                        </select>
                        <div
                            className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                    <small className="text-grey-dark text-xs italic">{error}</small>
                </div>

            </div>
        );

    }
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired

};

Select.defaultProps = {
    error: '',
    value: ''
};
export default Select;