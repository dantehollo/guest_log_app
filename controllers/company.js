const express = require('express')

const companyApi = require('../models/company.js')
const vendorApi = require('../models/vendor.js')

const companyRouter = express.Router()

// new
companyRouter.get('/company/new', (req, res) => {
    res.render('companyView/createCompanyForm')
})

// edit
companyRouter.get('/company/edit/:id', (req, res) => {
    companyApi.getOneCompany(req.params.id)
        .then((singleCompany) => {
            res.render('companyView/editCompanyForm', {singleCompany})
        })
})

// get all
companyRouter.get('/company', (req, res) => {
    companyApi.getAllCompany()
        .then((allCompany) => {
            res.render('companyView/allCompany', {allCompany})
        })
})

// get one
companyRouter.get('/company/:id', (req, res) => {
    companyApi.getOneCompany(req.params.id)
        .then((singleCompany) => {

            vendorApi.getAllVendorByCompanyId(req.params.id)
                .then((companyVendor) => {
                    res.render('companyView/singleCompany', {singleCompany, companyVendor})                    
                })
        })
}) 

// create
companyRouter.post('/company', (req, res) => {
    companyApi.createCompany(req.body)
        .then((createdCompany) => {
            res.redirect("/company")
        })
})

// update
companyRouter.put('/company/:id', (req, res) => {
    companyApi.updateCompany(req.params.id, req.body)
        .then((updatedCompany) => {
            res.redirect(`/company/${req.params.id}`)
        })
})

// delete
companyRouter.delete('/company/:id', (req, res) => {
    companyApi.deleteCompany(req.params.id)
        .then((deletedCompany) => {
            res.redirect('/company')
        })
})

// export
module.exports = {
    companyRouter
}