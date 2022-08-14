import checkToken from "#middlewares/checkToken.Middleware"
import blogs from "#controllers/blogs.Controller"
import express from "express"

const router = express.Router()

router.get("/blogs/:blog_id", blogs.GET_ONE )
router.get("/blogs",   blogs.GET)
router.post("/blogs", checkToken,  blogs.POST)
router.put("/blogs", checkToken,  blogs.PUT)
router.delete("/blogs", checkToken,  blogs.DELETE)


export default router