const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// creates jwt that expires in 1 day
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

const signupUser = async(req, res) => {
    const { username, password, email, phone, role } = req.body

    try {
        let user
        switch(role) {
            case 0:
                const { firstName, lastName } = req.body
                user = await User.signupCustomer(username, password, email, phone, firstName, lastName)
                break
            
            case 1:
                const { agencyName, country, city, street, registrationNumber, description } = req.body
                user = await User.signupAgency(username, password, email, password, agencyName, country, city, street, registrationNumber, description)
                break

            default: 
                throw Error('Invalid value for the role field')
        }

        const token = createToken(user._id)
        res.status(200).json({token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async(req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.login(username, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const changePassword = async(req, res) => {
    const { username, password, newPassword } = req.body

    try {
        const user = await User.change(username, password, newPassword)
        const token = createToken(user._id)

        res.status(200).json({token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const getAgencies = async(req, res) => {
    const agencies = await User.find({ role: 1 }, { agencyName: 1, country: 1, city: 1, street: 1, description: 1 })

    res.status(200).json(agencies)
}

module.exports = { signupUser, loginUser, changePassword, getAgencies }
