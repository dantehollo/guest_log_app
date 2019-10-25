const mongoose = require('./connection.js')
// const moment = require('moment')

// Schema
const GuestSchema = new mongoose.Schema({
    guestFirstName: String,
    guestLastName: String,
    guestPhoneNumber: String,
    reasonForVisit: String,
    signIn: {
        type: Date,
        default: Date.now
    },
    // signOut: {
    //     type: Date,
    //     default: Date.now
    // },
    companyId: mongoose.ObjectId
})

// collection
const GuestCollection = mongoose.model('Guest', GuestSchema)

// get all
const getAllGuest = () => {
    return GuestCollection.find({})
}

// get all guests by company id
const getAllGuestByCompanyId = (companyId) => {
    return GuestCollection.find({companyId: companyId})
}

// get one
const getOneGuest = (id) => {
    return GuestCollection.findById(id)
}

// create
const createGuest = (guestData) => {
    return GuestCollection.create(guestData)
} 

// update
const updateGuest = (id, guestData) => {
    return GuestCollection.updateOne({_id: id}, guestData)
}

// delete
const deleteGuest = (id) => {
    return GuestCollection.deleteOne({_id: id})
}

module.exports = {
    getAllGuest,
    getAllGuestByCompanyId,
    getOneGuest,
    createGuest,
    updateGuest,
    deleteGuest
}