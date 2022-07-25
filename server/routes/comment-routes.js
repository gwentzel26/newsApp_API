const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {     addComment,
    deleteComment } = require("../controllers/comment-controller");

router.post("/comments", ensureAuthenticated,  
async(req, res) => {
    await addComment(req, res);
});

router.delete("/comments/delete/:id", ensureAuthenticated, 
async(req, res) => {
    await deleteComment(req, res);
});

module.exports = router; 