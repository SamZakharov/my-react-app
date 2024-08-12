export const validateRequired = (value) => !value ? "Required" : null;

export const validateMaxLength = (value, maxLength) =>
    value.length > maxLength ? `Must be ${maxLength} characters or less` : null;

export const validateNoNumbers = (value) => /\d/g.test(value) ? "Numbers are not allowed" : null;

export const validateEmail = (email) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? "Invalid email address" : null;

export const validatePasswordLength = (password) =>
    password.length < 8 ? "Must be 8 characters or more" : null;
