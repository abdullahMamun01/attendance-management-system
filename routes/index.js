const router = require("express").Router()
const authRouter = require("./auth")
const usersRouter = require("./users")
router.use("/api/v1",authRouter)
router.use("/api/v1/users", usersRouter)

module.exports = router