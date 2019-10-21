const express = require('express')

const companyApi = require('../models/company.js')

const companyRouter = express.Router()

// new
companyRouter.post('/company/new', (req, res) => {
    res.render('companyView/createCompanyForm')
})

// get all
companyRouter.get('/company', (req, res) => {
    companyApi.getAllCompany()
        .then((allCompany) => {
            res.render('company/allCompany', {allCompany})
        })
})