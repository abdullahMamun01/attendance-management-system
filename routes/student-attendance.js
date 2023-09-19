const {getAttendance,getAttendanceStatus} = require("../controller/student-attendance")

const router = require("express").Router()

// getStatus

/** show available running status
 * @function  getAttendanceStatus
 * @method GET  
 * @route '/status'
 */
router.get("/status" , getAttendanceStatus )

/** attend in the attendance by id
 * @function  getAttendance
 * @method GET  
 * @route '/:id'
 * @param {string} id The ID of the attendance record to retrieve.
 * 
 */
router.get("/:id", getAttendance)


module.exports = router