const mongoose = require('./connection.js')

// Schema
const VendorSchema = new mongoose.Schema({
    vendorName: String,
    vendorAddress: String,
    vendorPhoneNumber: String,
    service: String
})

// collection
const VendorCollection = mongoose.model('Vendor', VendorSchema)

// get all
const getAllVendor = () => {
    return VendorCollection.find({})
}

// get one
const getOneVendor = (id) => {
    return VendorCollection.findById(id)
}

// create
const createVendor = (vendorData) => {
    return VendorCollection.create(vendorData)
}

// update
const updateVendor = (id, vendorData) => {
    return VendorCollection.updateOne({_id: id}, vendorData)
}

// delete
const deleteVendor = (id) => {
    return VendorCollection.deleteOne({_id: id})
}

// export
module.exports = {
    getAllVendor,
    getOneVendor,
    createVendor,
    updateVendor,
    deleteVendor
}