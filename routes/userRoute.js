const {Router} = require("express")
const {addUser} = require("../controllers/userControllers")

const router=Router();

router.route("/register").post(addUser)

module.exports=router
