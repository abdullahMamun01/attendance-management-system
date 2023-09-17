const AdminAttendance = require("../models/AdminAttendance")
const StudentAttendance = require("../models/StudentAttendance")
const error = require("../utils/error")


const getAttendance = async (req,res,next) =>{
    const {id} = req.params

    try {
        const adminAttendance = await AdminAttendance.findById(id)

        if(!adminAttendance){
            throw error("not running" , 400)
        }
        
        if(adminAttendance.status === "COMPLETED") throw error("Attendance already completed")
        let attendance = await StudentAttendance.findOne({user : req.user._id,isPresent : true, adminAttendance : id})
        if(attendance) throw error("Already register" , 400)

        attendance = new StudentAttendance({user : req.user._id , isPresent : true , adminAttendance : id })
        await attendance.save()

        return res.status(200).json(attendance)
    } catch (e) {
        next(e)
        
    }
}


const getAttendanceStatus = async (req,res,next) => {


    try {
        console.log('hello')
        const running = await AdminAttendance.findOne({status : "RUNNING"})
        
        if(!running) throw error("Not available", 400)
        
        return res.status(200).json(running)
    } catch (e) {
        next(e)
    }
}





module.exports = {
    getAttendance,
    getAttendanceStatus
}