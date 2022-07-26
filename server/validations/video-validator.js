const { check, validationResult} = require("express-validator");

const validationRules = () => {
    return [
        check("title").trim().isLength({min: 2, max: 100}).withMessage
        ("Title must be between 2 and 100 characters"),
        check("videoId").trim().isLength({min: 11, max: 11}).withMessage
        ("Youtube video Id must be 11 characters long"),

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