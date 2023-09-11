const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { findUserByProperty, createNewUser } = require("./user")
const error = require("../utils/error")


const registerService = async ({ name, email, password , roles , accountStatus }) => {
    const user = await findUserByProperty("email", email)
    if (user) throw error("user already exist", 400)
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return createNewUser({ name, email, password: hash ,roles, accountStatus })

}


const loginService = async ({ email, password }) => {
    const user = await findUserByProperty("email", email)
    if (!user) throw error("user do not exist ", 400)
    const isMatchPass = await bcrypt.compare(password, user.password)
    if (!isMatchPass) throw error("Invalid Credential", 400)

    
    const payload = {
        _id : user._id ,
        name: user.name,
        email: user.email,

    }

    let token = jwt.sign(payload,"secret-key",{expiresIn:'1h'})
    // return { message: "user login successfully", userDetails : payload}
    return token

}





module.exports = { registerService, loginService }