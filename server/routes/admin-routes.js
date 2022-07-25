const router = require("express").router;
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");

const { getAll, getAdmin } = require("../controllers/admin");

router.get("/users", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await getAll(req, res);
});

router.get("/users/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await getAdmin(req, res);
});
