import express from "express"

import authRouter from "#routes/auth.Router"
import usersRouter from "#routes/users.Router"
import professionsRouter from "#routes/professions.Router"
import blog_categories from "#routes/blog_categories.Router"
import blogs from "#routes/blogs.Router"
import disease_categories from "#routes/disease_categories.Router"
import diseases from "#routes/diseases.Router"
import contacts from "#routes/contacts.Router"
import departments from "#routes/departments.Router"


const router = express.Router()

router.use("/api", authRouter)
router.use("/api", usersRouter)
router.use("/api", professionsRouter)
router.use("/api", blog_categories)
router.use("/api", blogs)
router.use("/api", disease_categories)
router.use("/api", diseases)
router.use("/api", contacts)
router.use("/api", departments)


export default router