
const { addMinutes,isAfter } = require("date-fns")
const AdminAttendance = require("../models/AdminAttendance")
const error = require("../utils/error")
/* 
attendance active                      start[+]

{
    adminId [get admin id by token] ,
    addTime,
    if attendance time is over
      status will update :  running to completed

}

*/

const getEnable = async (_req, res, next) => {
    try {
        const running = await AdminAttendance.findOne({ status: "RUNNING" })
        if (running) throw error("Attendance already running", 400)
        const attendance = new AdminAttendance({})
        await attendance.save()
        return res.status(201).json({ message: "success", attendance })
    } catch (e) {
        next(e)
    }
}

const getDisable = async (_req, res, next) => {
    try{
        const running = await AdminAttendance.findOne({status : "RUNNING"})
        if (!running) throw error("No available attendance", 400) 
        running.status = "COMPLETED"
        await running.save()
        return res.status(200).json(running)
    }catch(e){
        next(e)
    }
}
const getStatus = async (_res, res, next) => {
    try {
        const running = await AdminAttendance.findOne({status : ["RUNNING","COMPLETED"]} ) 
        if (!running) throw error("No available attendance", 400)

        const addTime = addMinutes(new Date(running.createdAt) , running.timeLimit)
        if(isAfter(new Date(), addTime)){
            running.status = "COMPLETED"
            await running.save()
        }
        return res.status(200).json(running)
        
        
    } catch (e) {
        next(e)
    }
}
module.exports = {
    getEnable,
    getDisable,
    getStatus
}