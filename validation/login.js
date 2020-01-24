const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is requuired";
    } else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    } else if (!Validator.isPassword(data.password)){
        errors.password = "Password is incorrect";
    }
    return {
        errors,
        isValid: isEmpty(erros)
    };
};