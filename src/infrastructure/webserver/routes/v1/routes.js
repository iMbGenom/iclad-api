const version = 'v1'
const express = require('express')
const router = express.Router()

const ContentController = require('../../../../interfaces/controllers/' + version + '/ContentController')
const contentController = new ContentController()

router.get('', (req, res) => {
    res.send({
        Version: version,
        Status: 'OK',
        Message: 'Success',
        Timestamp: new Date(),
        UnixTimestamp: Math.round((new Date()).getTime() / 1000)
    })
})

router.get('/index', (req, res) => {
    res.send({
        Version: version,
        Status: 'OK',
        Message: 'Success',
        Timestamp: new Date(),
        UnixTimestamp: Math.round((new Date()).getTime() / 1000)
    })
})

router.get('/content/list', contentController.getContent)
router.post('/content/send', contentController.sendContent)

module.exports = router