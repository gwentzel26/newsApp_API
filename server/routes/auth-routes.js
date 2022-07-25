const router = require("express").router;
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const { login, 
    register,
    verifyEmail,
    forgotPassword,
    resetPassword,
    changePassword } = require("../controllers/authorization");
    
