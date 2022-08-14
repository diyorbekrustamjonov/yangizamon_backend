import checkToken from "#middlewares/checkToken.Middleware"
import disease_categories from "#controllers/disease_categories.Controller"
import express from "express"

const router = express.Router()

router.get("/disease_categories/:blog_category_id", disease_categories.GET_ONE)
router.get("/disease_categories", disease_categories.GET)
router.post("/disease_categories", checkToken,  disease_categories.POST)
router.put("/disease_categories", checkToken,  disease_categories.PUT)
router.delete("/disease_categories", checkToken,  disease_categories.DELETE)

export default router