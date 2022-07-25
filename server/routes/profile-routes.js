const router = require("express").router;
const { ensureAuthenticated } = require("../middleware/auth-middleware");
const {    updateUser,
    getUser, } = require("../controllers/profile-controller");

router.put("/profile", ensureAuthenticated,  
async(req, res) => {
    await updateUser(req, res);
});

router.get("/profile", ensureAuthenticated, 
async(req, res) => {
    await getUser(req, res);
});



module.exports = router;