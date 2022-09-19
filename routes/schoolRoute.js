const { createSchool,getSchools } = require("../controllers/schoolController")
const { Router } = require("express")

const router = Router();

router.post("/addschool", createSchool)

router.get("/schools", getSchools)

module.exports= router