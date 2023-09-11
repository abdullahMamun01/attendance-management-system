
const jwt = require("jsonwebtoken")
const error = require("../utils/error")
const User = require('../models/User')
const authenticate = async (req, res, next) => {

    try {
        let authHeaders = req.headers.authorization
        if (!authHeaders) throw error("Unauthorized", 401)
        let token = authHeaders.split(" ")[1]
        let verify =  jwt.verify(token,"secret-key")
        let user = await User.findById(verify._id)
        if(!user){
            throw error('Unauthorized' , 404)
        }
        req.user = user
        next()
    } catch {
      return  res.status(400).json({message : "Invalid token"})

    }
}

module.exports = authenticate