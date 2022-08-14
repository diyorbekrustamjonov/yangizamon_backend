import checkToken from "#middlewares/checkToken.Middleware"
import checkDevice from "#middlewares/checkDevice.Middleware"
import contacts from "#controllers/contacts.Controller"
import express from "express"

const router = express.Router()

router.get("/contacts/:contact_id", contacts.GET_ONE)
router.get("/contacts",  contacts.GET)
router.post("/contacts", checkToken, checkDevice,  contacts.POST)
router.put("/contacts", checkToken, checkDevice,  contacts.PUT)
router.delete("/contacts", checkToken, checkDevice,  contacts.DELETE)

export default router