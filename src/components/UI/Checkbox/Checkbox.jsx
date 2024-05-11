import React from 'react';
import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const Checkbox = ({label, value, onChange, name, type}) => {
    return (
        <div>
            <Form.Check
                type={type}
                label={label}
                name={name}
                checked={value}
                onChange={onChange}
            />
        </div>
    );
};


Checkbox.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'switch']).isRequired,
    label: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Checkbox;