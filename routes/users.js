const { getAllUsers,getUserById,deleteUserById, patchUserById, putUserBYId } = require("../controller/users")

const router = require("express").Router()


/* 
get all users
get user by id
update user by id
delete user by id
*/




router.get('/' , getAllUsers)
router.get('/:userId' , getUserById)
router.delete('/:userId' , deleteUserById)
router.patch("/:userId" ,patchUserById)
router.put("/:userId" ,putUserBYId)
module.exports = router
