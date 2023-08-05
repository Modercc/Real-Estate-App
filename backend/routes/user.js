const express = require('express')

// controller functions
const {
    signupUser,
    loginUser,
    changePassword,
    getAgencies
} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// UPDATE password
router.post('/changePassword', changePassword)

// GET all agencies
router.get('/getAgencies', getAgencies)

module.exports = router