
const { findUsers, findUserByProperty, deleteById, updateUser } = require("../service/user")
const error = require("../utils/error")


// get all user from database
const getAllUsers = async (req, res, next) => {
    try {
        const users = await findUsers()
        return res.status(200).json(users)
    } catch (e) {
        next(e)
    }
}

//  /api/v1/users/12345
//find user by id

const getUserById = async (req, res, next) => {
    try {
        const { userId } = req.params
        const user = await findUserByProperty("_id", userId)
        if (!user) {
            throw error("User not found", 404)
        }
        return res.status(200).json(user)
    } catch (e) {
        next(e)
    }

}
//update user info by id
const patchUserById = async (req, res, next) => {
    const { userId } = req.params
    const { name, roles, accountStatus } = req.body
    try {
        const user = await findUserByProperty("_id", userId)
        if (!user) throw error("User not found", 404)
        user.name = name ?? user.name
        user.roles = roles ?? user.roles
        user.accountStatus = accountStatus ?? user.accountStatus
        await user.save()
        return res.status(200).json(user)
    } catch (e) {
        next(e)
    }


}
//update data using put request

const putUserBYId = async (req,res,next) => {
    const {userId} = req.params
    const  {name,roles,accountStatus} = req.body
    try {
        const user = await updateUser(userId ,{name,roles,accountStatus })
        console.log({user})
        if(!user){
            throw error("User not found" , 404)
        }

        return res.status(200).json(user)
    }catch(e){
        next(e)
    }

}

//delete specific user by id
const deleteUserById = async (req, res, next) => {
    try {
        const { userId } = req.params

        const user = await findUserByProperty("_id", userId)
        if (!user) throw error("User not found", 404)
        await deleteById(user._id)
        return res.status(203).send() ;
    } catch (e) {
        next(e)
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    patchUserById,
    putUserBYId
}