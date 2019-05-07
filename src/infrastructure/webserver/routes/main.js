const version = 'v1'
const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.send({
        Status: 'OK',
        Message: 'Success',
        Timestamp: new Date(),
        UnixTimestamp: Math.round((new Date()).getTime() / 1000)
    })
})

module.exports = router