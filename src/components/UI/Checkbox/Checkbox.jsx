import React from 'react';
import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const Checkbox = ({label, onChange, name, type}) => {
    return (
        <div>
            <Form.Check
                className="mb-3"
                type={type}
                label={label}
                name={name}
                onChange={onChange}
            />
        </div>
    );
};


Checkbox.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'switch']).isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Checkbox;