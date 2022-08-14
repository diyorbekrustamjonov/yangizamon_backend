import checkToken from "#middlewares/checkToken.Middleware"
import diseases from "#controllers/diseases.Controller"
import express from "express"

const router = express.Router()

router.get("/diseases/:disease_id", diseases.GET_ONE )
router.get("/diseases",  diseases.GET)
router.post("/diseases", checkToken,  diseases.POST)
router.put("/diseases", checkToken,  diseases.PUT)
router.delete("/diseases", checkToken,  diseases.DELETE)


export default router