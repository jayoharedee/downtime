'use strict'

const express = require('express')
const router  = express.Router()

router.get('/', (req, res, next) => {
    return res.status(200)
        .json({
            status: 'success',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/dash', (req, res, next) => {
    return res.status(200)
        .json({
            status: 'success',
            data: 'the payload is right here man',
            message: 'Got the payload'
        })
})

module.exports = router
