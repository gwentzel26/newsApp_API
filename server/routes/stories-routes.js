const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {       addStory,
    deleteStory,
    updateStory,
    getAll,
    getStory,
    getTopStories,
    getStoryBySlug } = require("../controllers/stories-controller");



router.get("/stories",  async(req, res) => {
    await getAll(req, res);
});

router.post("/stories", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await addStory(req, res);
});

router.put("/stories/update/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await updateStory(req, res);
});

router.get("/stories/:id", 
async(req, res) => {
    await getStory(req, res);
});

router.delete("/stories/delete/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await deleteStory(req, res);
});

router.get("/stories/top",  async(req, res) => {
    await getTopStories(req, res);
});

router.get("/stories/slug/:slug", 
async(req, res) => {
    await getStoryBySlug(req, res);
});

module.exports = router;