const express = require('express')
const moment = require('moment')

const companyApi = require('../models/company.js')
const vendorApi = require('../models/vendor.js')
const guestApi = require('../models/guest.js')

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
    // const simgleCompany = await companyApi.getOneCompany(req.params.id)
    // const companyVendors = await vendorApi.getAllVendorByCompanyId(req.params.id)
    // const companyGuests = await guestApi.getAllGuestByCompanyId(req.params.id)
    companyApi.getOneCompany(req.params.id)
        .then((singleCompany) => {

            vendorApi.getAllVendorByCompanyId(req.params.id)
                .then((companyVendor) => {
                    res.render('companyView/singleCompany', {singleCompany, companyVendor})
                })
        })
})

// load guests onto guestLog
companyRouter.get('/company/:id/guestLog', (req, res) => {
    guestApi.getAllGuestByCompanyId(req.params.id)
        .then((companyGuest) => {
            res.render('companyView/guestLog', {companyGuest})
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