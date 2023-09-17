const {getAttendance,getAttendanceStatus} = require("../controller/student-attendance")

const router = require("express").Router()

// getStatus


router.get("/status" , getAttendanceStatus )
router.get("/:id", getAttendance)


module.exports = router