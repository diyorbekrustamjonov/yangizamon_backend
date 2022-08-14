import checkToken from "#middlewares/checkToken.Middleware"
import checkDevice from "#middlewares/checkDevice.Middleware"
import departments from "#controllers/departments.Controller"
import express from "express"

const router = express.Router()

router.get("/departments/:department_id", departments.GET_ONE )
router.get("/departments",  departments.GET)
router.post("/departments", checkToken, checkDevice,  departments.POST)
router.put("/departments", checkToken, checkDevice,  departments.PUT)
router.delete("/departments", checkToken, checkDevice,  departments.DELETE)


export default router