import {
    validateEmail,
    validateMaxLength,
    validateNoNumbers,
    validatePasswordLength,
    validateRequired
} from './validationUtils';

const signUpValidator = (values) => {
    const errors = {};

    errors.firstName = validateRequired(values.firstName) ||
        validateMaxLength(values.firstName, 15) ||
        validateNoNumbers(values.firstName);

    errors.lastName = validateRequired(values.lastName) ||
        validateMaxLength(values.lastName, 20) ||
        validateNoNumbers(values.lastName);

    errors.email = validateRequired(values.email) ||
        validateEmail(values.email);

    errors.password = validateRequired(values.password) ||
        validatePasswordLength(values.password);

    return errors;
};

const loginValidator = (values) => {
    const errors = {};

    errors.email = validateRequired(values.email) ||
        validateEmail(values.email);

    errors.password = validateRequired(values.password) ||
        validatePasswordLength(values.password);

    return errors;
};

const updateInfo = (values) => {
    const errors = {};

    errors.firstName = validateRequired(values.firstName) ||
        validateMaxLength(values.firstName, 15) ||
        validateNoNumbers(values.firstName);

    errors.lastName = validateRequired(values.lastName) ||
        validateMaxLength(values.lastName, 20) ||
        validateNoNumbers(values.lastName);

    errors.email = validateRequired(values.email) ||
        validateEmail(values.email);

    return errors;
};

export {signUpValidator, loginValidator, updateInfo};
