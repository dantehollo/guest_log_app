const express = require('express')
const moment = require('moment')

const guestApi = require('../models/guest.js')

const guestRouter = express.Router()

// new
guestRouter.get('/guest/new', (req, res) => {
    res.render('guestView/createGuestForm')
})
// get guest by company id
guestRouter.get('/guest/new/:companyId', (req, res) => {
    res.render('vendor/createVendorForm', {companyId: req.params.companyId})
})

// edit
guestRouter.get('/guest/edit/:id', (req, res) => {
    guestApi.getOneGuest(req.params.id)
        .then((singleGuest) => {
            res.render('guestView/editGuestForm', {singleGuest})
        })
})

// get all
guestRouter.get('/guest', (req, res) => {
    guestApi.getAllGuest()
        .then((allGuest) => {
            res.render('guestView/allGuest', {allGuest})
        })
})

// get one
guestRouter.get('/guest/:id', (req, res) => {
    guestApi.getOneGuest(req.params.id)
        .then((singleGuest) => {
            res.render('guestView/singleGuest', {singleGuest})
        })
}) 

// create
guestRouter.post('/guest', (req, res) => {
    guestApi.createGuest(req.body)
        .then((createdGuest) => {
            res.redirect("/guest")
        })
})

// update
guestRouter.put('/guest/:id', (req, res) => {
    guestApi.updateGuest(req.params.id, req.body)
        .then((updatedGuest) => {
            res.redirect(`/guest/${req.params.id}`)
        })
})

// delete
guestRouter.delete('/guest/:id', (req, res) => {
    guestApi.deleteGuest(req.params.id)
        .then((deletedGuest) => {
            res.redirect('/guest')
        })
})

// export
module.exports = {
    guestRouter
}