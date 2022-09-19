const mongoose = require("mongoose")
const { number } = require("yup")


const schoolSchema =mongoose.Schema({
     schoolname: {
        type: String,
        required: true,
        unique: true
     },
     location: {
        type: String,
        required: true
     },
     category: {
        type: String,
        required: true
     },
     facilities: {
        type: Array,
        required: true,
        
     },
     numofStudents: {
        type: Number,
        required: true,
     },
     address: {
        gps: String,
        box: String,
     },
     contact: {
        phone: String,
        email: String,
    },

    }, {
       timestamps:true
    }
    )

    const School = mongoose.model("schools", schoolSchema)
    module.exports=School