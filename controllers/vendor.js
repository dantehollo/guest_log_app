const express = require('express')

const vendorApi = require('../models/vendor.js')

const vendorRouter = express.Router()

// new
vendorRouter.get('/vendor/new', (req, res) => {
    res.render('vendorView/createVendorForm')
})

// edit
vendorRouter.get('/vendor/edit/:id', (req, res) => {
    vendorApi.getOneVendor(req.params.id)
        .then((singleVendor) => {
            res.render('vendorView/editVendorForm', {singleVendor})
        })
})

// get all
vendorRouter.get('/vendor', (req, res) => {
    vendorApi.getAllVendor()
        .then((allVendor) => {
            res.render('vendorView/allVendor', {allVendor})
        })
})

// get one
vendorRouter.get('/vendor/:id', (req, res) => {
    vendorApi.getOneVendor(req.params.id)
        .then((singleVendor) => {
            res.render('vendorView/singleVendor', {singleVendor})
        })
}) 

// create
vendorRouter.post('/vendor', (req, res) => {
    vendorApi.createVendor(req.body)
        .then((createdVendor) => {
            res.redirect("/vendor")
        })
})

// update
vendorRouter.put('/vendor/:id', (req, res) => {
    vendorApi.updateVendor(req.params.id, req.body)
        .then((updatedVendor) => {
            res.redirect(`/vendor/${req.params.id}`)
        })
})

// delete
vendorRouter.delete('/vendor/:id', (req, res) => {
    vendorApi.deleteVendor(req.params.id)
        .then((deletedVendor) => {
            res.redirect('/vendor')
        })
})

// export
module.exports = {
    vendorRouter
}