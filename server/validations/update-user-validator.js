const { check, validationResult} = require("express-validator");

const validationRules = () => {
    return [
        check("username").trim().isLength({min: 6, max: 20}).withMessage
        ("Comment must be between 6 and 20 characters")
    ]
};

const validate = (req, res, next) => {
    const errors = validationRules(req);

    if(errors.isEmpty()) {
        return next;
    } 

    const resultError = [];
    errors.array().map((err) => resultErrors.push({[err.param]: err.mss}) );

    resultError.push({message: "Action unsuccessful"});
    resultError.push({success: false});

    const errorObject = Object.assign({}, ...resultErrors);
    return res.status(422).json(errorObject);
};

module.exports = {
    validate,
    validationRules
};