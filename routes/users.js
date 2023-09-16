const { getAllUsers,getUserById,deleteUserById, patchUserById, putUserBYId } = require("../controller/users")

const router = require("express").Router()


/* 
get all users
get user by id
update user by id
delete user by id
*/


/** show all available user
 * @function  getAllUsers
 * @method get  
 * @route '/'
 */

router.get('/' , getAllUsers)

/** find user by id
 * @function  getUserById
 * @method get  
 * @route '/:userId'
 */
router.get('/:userId' , getUserById)

/** delete user by id
 * @function  deleteUserById
 * @method delete  
 * @route '/:userId'
 */
router.delete('/:userId' , deleteUserById)

/** update user information by id
 * @function  patchUserById
 * @method patch  
 * @route '/:userId'
 */

router.patch("/:userId" ,patchUserById)

/** update user by id
 * @function  putUserBYId
 * @method put  
 * @route '/:userId'
 */
router.put("/:userId" ,putUserBYId)
module.exports = router
