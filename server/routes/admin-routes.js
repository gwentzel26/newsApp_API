const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const { getAll, getAdmin } = require("../controllers/admin");
const register = require("../controllers/authorization")

router.get("/users", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await getAll(req, res);
});

router.get("/users/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await getAdmin(req, res);
});

router.get("/users/seed", async(req, res) => {
    const admin = {
        username: "Administrator",
        email: "admin@newsApp.com",
        password: "paSword123"
        
    };

    await register(admin, "admin", res);
});

module.exports = router;