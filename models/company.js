const mongoose = require('./connection.js')

// Company Schema
const CompanySchema = mongoose.Schema({
    companyName: String,
    companyAddress: String,
    companyPhoneNumber: String,
    companyImage: String,
    registeredVendors: String,
    guestLog: String
})

// collection
const CompanyCollection = new mongoose.model('Company', CompanySchema)

// get all
const getAllCompany = () => {
    return CompanyCollection.find({})
}

// get one
const getOneCompany = (id) => {
    return CompanyCollection.findById(id)
}

// create
const createCompany = (companyData) => {
    return CompanyCollection.create(companyData)
}

// update
const updateCompany = (id, companyData) => {
    return CompanyCollection.updateOne({_id: id}, companyData)
}

// delete
const deleteCompany = (id) => {
    return CompanyCollection.deleteOne({_id: id})
}

// export
module.exports = {
    getAllCompany,
    getOneCompany,
    createCompany,
    updateCompany,
    deleteCompany
}