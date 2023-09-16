const router = require("express").Router()
const {registerController,loginController} = require("../controller/auth")


/** register new user
 * @function controller registerController
 * @method post  
 * @route /auth/register
 */
router.post("/auth/register" ,registerController)
/** login user by email and password
 * @function controller loginController
 * @method post  
 * @route /auth/login
 */
router.post("/auth/login" ,loginController)



module.exports = router