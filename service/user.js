const User = require("../models/User")

const findUserByProperty = (key, value) => {
	if (key === '_id') {
		return User.findById(value);
	}
	return User.findOne({ [key]: value });
};



const createNewUser = ({ name, email, password, roles, accountStatus }) => {
    const user = new User({
        name, 
        email,
        password, 
        roles : roles ?? "STUDENT", 
        accountStatus : accountStatus?? "PENDING"
    })
    return user.save()
}

const deleteById = (userId) =>{
    return User.deleteOne(userId)
}
const findUsers = () => {
    return User.find()
}

const updateUser = (id,data) =>{
    return User.findByIdAndUpdate(id,{...data} , {new : true})
}
module.exports = { 
    findUserByProperty, 
    createNewUser, 
    findUsers,
    deleteById,
    updateUser 
}