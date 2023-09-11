const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const connectDB = require("./db")
const routes = require("./routes/index")
const {globalErrorHandle} = require("./globalError")
const authenticate = require("./middleware/authenticate ")
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(routes)


app.get("/api/v1/auth/private" , authenticate , (req,res,next) =>{
	res.status(200).json({
		message: "I am private route"
	})
})
app.get('/health', (req, res) => {
	res.status(201).json({ message: "ok" })
})
app.use(globalErrorHandle)

connectDB("mongodb://localhost:27017/attend-dance")
	.then(async () => {
		console.log("data base connected successfully")
		app.listen(8000, () => {
			console.log(`Example app listening on port 8000`)
		})

		
	})
	.catch((e) => {
		console.log(e.message)
	})

