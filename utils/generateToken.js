const jwt = require('jsonwebtoken')

exports.generateToken = (id) => {
    return jwt.sign({id}, process.env.JKT_SECRET, {expiresIn:"30mins"})
}

