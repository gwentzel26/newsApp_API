const passport = require("passport");

// standard passport function found in documentation
const ensureAuthenticated = passport.authenticate("jwt", {session: false});

const ensureAuthorized = (roles) => (req, res, next) => {
    if(roles.includes(req.user.role)) {
        return next();
    }
    return res.status(401).json({
        message: "Unauthorized user",
        success: false,
    })
}

module.exports = {
    ensureAuthenticated,
    ensureAuthorized
}