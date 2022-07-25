const router = require("express").Router();

const authRoutes = require("./auth-routes");
const adminRoutes = require("./admin-routes");
const categoriesRoutes = require("./categories-routes");
const commentRoutes = require("./comment-routes");
const profileRoutes = require("./profile-routes");
const storiesRoutes = require("./stories-routes");
const videosRoutes = require("./video-routes");

router.use("/auth", authRoutes);
router.use("/api", adminRoutes);
router.use("/api", categoriesRoutes);
router.use("/api", commentRoutes);
router.use("/api", profileRoutes);
router.use("/api", storiesRoutes);
router.use("/api", videosRoutes);

module.exports = router;