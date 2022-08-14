import checkToken from "#middlewares/checkToken.Middleware"
import checkDevice from "#middlewares/checkDevice.Middleware"
import professions from "#controllers/professions.Controller"
import express from "express"

const router = express.Router()

router.get("/professions/:profession_id", professions.GET_ONE )
router.get("/professions", professions.GET)
router.post("/professions", checkToken, checkDevice,  professions.POST)
router.put("/professions", checkToken, checkDevice,  professions.PUT)
router.delete("/professions", checkToken, checkDevice,  professions.DELETE)

export default router