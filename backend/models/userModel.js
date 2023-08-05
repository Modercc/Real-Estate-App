const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    // customer=0, agency=1
    role: {
        type: Number,
        required: true,
        unique: true
    },
    // user specific fields
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    // agency specific fields
    agencyName: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    street: {
        type: String
    },
    registrationNumber: {
        type: String
    },
    description: {
        type: String
    }
})

userSchema.statics.signupCustomer = async function(username, password, email, phone, firstName, lastName) {
    // validation

    // check if all fields have been filled
    if(!username || !password || !email || !phone || !firstName || !lastName)
        throw Error('All fields must be filled')
    
    // check if username already exists in db
    const existsUsername = await this.findOne({ username })
    if(existsUsername)
        throw Error('Username already in use')
    
    // check if email already exists in db
    const existsEmail = await this.findOne({ email })
    if(existsEmail)
        throw Error('Email already in use')
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({
        username,
        password: hash,
        email,
        phone,
        role: 0,
        firstName,
        lastName
    })

    return user 
}

userSchema.statics.signupAgency = async function(username, password, email, phone, agencyName, country, city, street, registrationNumber, description) {
    if(!username || !password || !email || !phone || !agencyName || !country || !city || !street || !registrationNumber || !description)
        throw Error('All fields must be filler')
    
        const existsUsername = await this.findOne({ username })
        if(existsUsername)
            throw Error('Username already in use')
        
        const existsEmail = await this.findOne({ email })
        if(existsEmail)
            throw Error('Email already in use')

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await this.create({
            username,
            password: hash,
            email,
            phone,
            role: 1,
            agencyName,
            country,
            city,
            street,
            registrationNumber,
            description
        })

        return user
}

userSchema.statics.login = async function(username, password) {
    if(!username || !password)
        throw Error('All fields must be filled')
    
    const user = await this.findOne({ username })

    if(!user)
        throw Error('Incorrect username')
    
    const match = await bcrypt.compare(password, user.password)
    if(!match)
        throw Error('Incorrect password')
    
    return user
}

userSchema.statics.change = async function(username, password, newPassword) {

    if(!username || !password || !newPassword)
        throw Error('All fields must be filled')

    const user = await this.findOne({ username })

    if(!user)
        throw Error('Incorrect username')
    
    const match = await bcrypt.compare(password, user.password)
    if(!match)
        throw Error('Incorrect password')

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newPassword, salt)
    
    await this.updateOne({ username }, { password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)