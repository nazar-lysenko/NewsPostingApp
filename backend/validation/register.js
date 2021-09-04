const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegisterInput = (data) => {
    let errors = {};

    data.login = !isEmpty(data.login) ? data.login : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.passwordRepeat = !isEmpty(data.passwordRepeat)
        ? data.passwordRepeat
        : "";

    if (Validator.isEmpty(data.login)) {
        errors.login = "Name field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.passwordRepeat)) {
        errors.passwordRepeat = "Confirm password field is required";
    }

    if (!Validator.isLength(data.password, { min: 4, max: 30 })) {
        errors.password = "Password must be at least 4 characters";
    }

    if (!Validator.equals(data.password, data.passwordRepeat)) {
        errors.passwordRepeat = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
