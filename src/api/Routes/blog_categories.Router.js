import checkToken from "#middlewares/checkToken.Middleware"
import blog_categories from "#controllers/blog_categories.Controller"
import express from "express"

const router = express.Router()

router.get("/blog_categories/:blog_category_id", blog_categories.GET_ONE)
router.get("/blog_categories",  blog_categories.GET)
router.post("/blog_categories", checkToken,  blog_categories.POST)
router.put("/blog_categories", checkToken,  blog_categories.PUT)
router.delete("/blog_categories", checkToken,  blog_categories.DELETE)

export default router