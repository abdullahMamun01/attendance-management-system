const router = require("express").Router()
const {registerController,loginController} = require("../controller/auth")

router.post("/auth/register" ,registerController)
router.post("/auth/login" ,loginController)



module.exports = router