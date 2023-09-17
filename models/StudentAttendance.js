const { Schema, model } = require("mongoose")

const studentAttendanceSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : "user",
        require : true,

    },
    isPresent : {
      type : Boolean,
      require: true,
      default : false  
    },
    adminAttendance : {
        type : Schema.Types.ObjectId,
        ref : "adminAttendance",
        require : true,

    },

} , {timestamps : true})


const StudentAttendance = model ("StudentAttendance" , studentAttendanceSchema)
module.exports = StudentAttendance

/* 

 Shakib sir class                    [attendance]    
 
 

 {studentId,TeacherId,}

*/