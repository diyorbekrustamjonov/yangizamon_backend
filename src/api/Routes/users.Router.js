import checkToken from "#middlewares/checkToken.Middleware"
import checkDevice from "#middlewares/checkDevice.Middleware"
import users from "#controllers/users.Controller"
import express from "express"

const router = express.Router()

router.get("/users/:user_id", checkToken, users.GET_ONE )
router.get("/users", checkToken,  users.GET)
router.post("/users", checkToken,   users.POST)
router.put("/users", checkToken,   users.PUT)
router.delete("/users", checkToken,  users.DELETE)


export default router