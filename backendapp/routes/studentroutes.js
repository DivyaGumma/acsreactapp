const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const studentrouter = express.Router()

// student routes
studentrouter.post("/insertstudent",studentcontroller.insertstudent)
studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)



module.exports = studentrouter