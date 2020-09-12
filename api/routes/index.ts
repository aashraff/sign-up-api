import * as express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

export default router;