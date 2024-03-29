const express = require('express')
const app = express()
const methodOverride = require('method-override')
const moment = require('moment');
moment().format('llll');

const { companyRouter } = require('./controllers/company.js')
const { guestRouter } = require('./controllers/guest.js')
const { vendorRouter } = require('./controllers/vendor.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')

app.use('/', companyRouter)

app.use('/', guestRouter)

app.use('/', vendorRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})