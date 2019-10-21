const mongoose = require('./connection.js')

// Schema
const GuestSchema = new mongoose.Schema({
    name: String,
    signIn: String,
    time: String,
    signOut: String,
    reasonForVisit: String
})

// collection
const GuestCollection = mongoose.model('Guest', GuestCollection)

// get all
const getAllGuest = () => {
    return GuestCollection.find({})
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
    getOneGuest,
    createGuest,
    updateGuest,
    deleteGuest
}