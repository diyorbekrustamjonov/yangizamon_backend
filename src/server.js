import fileUpload from "express-fileupload"
import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import { resolve } from "path"

import "#config/index"

import routes from "#api/routes"


!async function() {
	const app = express()

	// Cors settings 
	app.use(cors())

	// Morgan settings 
	app.use(morgan("dev"))

	// Body parser settings
	app.use(bodyParser.json())
	
	// Urlencode extended settings
	app.use(bodyParser.urlencoded({extended: true}))

	// Server static files
	app.use(express.static(resolve(process.cwd(), "src", "uploads")))
	
	// Express json
	app.use(express.json())

	// fileUpload settings
	app.use(fileUpload({
		limits: {
			fileSize: 50 * 1024 * 1024
		}	
	}))

	// Routes
	app.use(routes)

	app.get("/", (req, res) => {
		res.status(200).json({
			"Project name": "yangizamon_uz",
			"version": "1.2.0^development",
			"author": "github.com/diyorbekrustamjonov"
		})
	})

	try {
		await app.listen(process.env.PORT, () => {
			console.log(`Server running on port ${process.env.PORT}`)
		})
	} catch (error) {
		console.error(error)
	}
}()