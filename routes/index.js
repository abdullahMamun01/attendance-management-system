const router = require("express").Router()
const authenticate = require("../middleware/authenticate ")
const authRouter = require("./auth")
const usersRouter = require("./users")
const adminAttendanceRoutes = require("./admin-attendance")

router.use("/api/v1",authRouter)
router.use("/api/v1/user", usersRouter)
router.use("/api/v1/admin/attendance", authenticate,adminAttendanceRoutes)
module.exports = router