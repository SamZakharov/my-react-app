import React from 'react';
import {Form} from "react-bootstrap";
import {random} from 'lodash';
import PropTypes from "prop-types";

const Input = ({
                   label = null,
                   name = '',
                   type = 'text',
                   placeholder = 'Put your data here',
                   value = '',
                   onChange = (e) => {
                       console.log(e.target.value);
                   },
                   ...restProps
               }) => {
    const controlId = 'form-input' + random(0, 1000)
    return (
        <div>
            <Form.Group className="mb-3" controlId={controlId}>
                {label && <Form.Label>{label}</Form.Label>}
                <Form.Control
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="off"
                    value={value}
                    onChange={onChange}
                    {...restProps}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
}

export default Input;