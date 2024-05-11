import React from 'react';
import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const Select = ({
                    label = '',
                    options = null,
                    value = '',
                    onChange = (e) => {
                        console.log(e.target.value);
                    },
                    name = ''
                }) => {

    return (
        <div>
            {label && <Form.Label>{label}</Form.Label>}
            {Array.isArray(options) && options.length > 0 ? (
                <Form.Select className="mb-3"
                             name={name}
                             aria-label={label}
                             value={value}
                             onChange={onChange}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
            ) : null}
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Select;
