const router = require("express").router;
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {  addVideo,
    deleteVideo,
    updateVideo,
    getAll,
    getVideo,
    getTopVideos, } = require("../controllers/video-controller");



router.get("/videos",  async(req, res) => {
    await getAll(req, res);
});

router.post("/videos", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await addVideo(req, res);
});

router.put("/videos/update/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await updateVideo(req, res);
});

router.get("/videos/:id", 
async(req, res) => {
    await getVideo(req, res);
});

router.delete("/videos/delete/:id", ensureAuthenticated, ensureAuthorized(["admin"]), 
async(req, res) => {
    await deleteVideo(req, res);
});

router.get("/videos/top",  async(req, res) => {
    await getTopVideos(req, res);
});

module.exports = router;