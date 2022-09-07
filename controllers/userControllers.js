const { restart } = require("nodemon")
const User = require('../controllers/userControllers')
const bcryptjs =("bcryptjs")

//adding a user

const addUser =async(req, res)=>{
    //hashing a password
    const salt = await bcryptjs.genSalt(10)
    const hashed = await bcryptjs.hash(req.body.password, salt)

 const newUser=new User({
 username: req.body.username,
 email: req.body.email,
 password: req.body.password,
 });
 
 await newUser.save();
 res.status(201).json({
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email
 })
}
module.exports={addUser}