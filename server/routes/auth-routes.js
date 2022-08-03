const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const { login, 
    register,
    verifyEmail,
    forgotPassword,
    resetPassword,
    changePassword } = require("../controllers/authorization");

    const { validationRules, validate } = require("../validations/user-validator");
    const { validationRules: passwordValidationRules, validate: passwordValidate } = require("../validations/change-password-validator");
    
    
    router.post("/login", async(req, res) => {
        await login(req.body, res);
    });
    
    router.post("/register", validationRules(), validate, async(req, res) => {
        await register(req.body, "user", res);
    });

    router.post("/verifyEmail", async(req, res) => {
        await verifyEmail(req.body, res);
    });

    router.post("/forgotPassword", async(req, res) => {
        await forgotPassword(req.body, res);
    });

    router.post("/resetPassword", async(req, res) => {
        await resetPassword(req.body, res);
    });

    router.post("/changePassword", ensureAuthenticated, async(req, res) => {
        await changePassword(req.body, res);
    });

    module.exports = router;