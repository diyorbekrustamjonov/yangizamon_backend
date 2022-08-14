import express from "express"
import auth from "#controllers/auth.Controller"

const router = express.Router()

router.post("/auth/login", auth.LOGIN )

export default router