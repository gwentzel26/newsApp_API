const router = require("express").router;
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {   addCategory,
    deleteCategory,
    updateCategory,
    getAll,
    getCategory } = require("../controllers/categories-controller");



router.get("/categories",  async(req, res) => {
    await getAll(req, res);
});

router.post("/categories", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await addCategory(req, res);
});

router.put("/categories/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await updateCategory(req, res);
});

router.get("/categories/:id", 
async(req, res) => {
    await getCategory(req, res);
});

router.delete("/categories/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await deleteCategory(req, res);
});

module.exports = router;