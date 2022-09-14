const jwt =require('jsonwebtoken')
const User =require('../models/userSchema')



// is admin middleware

exports.admin=async function(req, res,next) {
    if (req.User && req.User.isAdmin){
        res.status(401).json({
            messsage:"you are not an authorized admin"
        })
    }
}