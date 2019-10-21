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

// create
companyRouter.post('/company', (req, res) => {
    companyApi.createCompany(req.body)
        .then((createdCompany) => {
            res.redirect("/company")
        })
})

module.exports = {
    companyRouter
}