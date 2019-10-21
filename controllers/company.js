const express = require('express')

const companyApi = require('../models/company.js')

const companyRouter = express.Router()

// new
companyRouter.get('/company/new', (req, res) => {
    res.render('companyView/createCompanyForm')
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
            res.render('companyView/singleCompany', {singleCompany})
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

// edit

module.exports = {
    companyRouter
}