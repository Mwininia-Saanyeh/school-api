const yup = require(yup);

function validate(){
    const userSchema =yup.object().shape({
        username: yup.string().required("username must be filled").min(3).max(20),
        email: yup.string().emal().required("email is required").min(3).max(20),
        password: yup.string().required("password is required").min(3).max(20),
    });
    return userSchema.validate(date);
}

module.exports={validate};