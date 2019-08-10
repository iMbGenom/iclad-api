/**
 * Express server class is responsible for serving the API using
 * the Express web framework
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routeMain = require('./routes/main')
const routeVersion1 = require('./routes/v1/routes')
const config = require('../../config')
const RunningPort = process.env.RUNNING_PORT

app.use(bodyParser.json()) /* allow express pars any json */
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors()) /* allowed any cors client */
app.use(morgan('combined')) /* print out log user agent */

// - - - M O N G O - - -
// connection
// mongoose.connect('mongodb://'+config.mongoDbHostDev+'/'+vivaDb, {
mongoose.connect('mongodb://' + config.MONGO_HOST + '/' + config.MONGO_NAME, {
    useNewUrlParser: true
})
const db = mongoose.connection
// error
db.on('error', console.error.bind(console, 'connection error:'))
// connection open
db.once('open', () => {
    console.log(`Connected to Mongo Local (` + config.MONGO_NAME + `) at: ${new Date()}`)
})
// - - - E N D  M O N G O - - -

class ExpressServer {
    // constructor()
    // We are injecting the interface as part of the constructor
    constructor(options) {
        this.webserverInterface = options.WebServerInterface
    }
    static toString() {
        return 'Express Server Infrastructure'
    }

    // start() is the starting point of the web server
    start() {
        app.use('/', routeMain)
        app.use('/v/1/', routeVersion1)

        app.listen(RunningPort, () => {
            console.log('ICLAD, listening on port ' + RunningPort)
        })
    }
}

module.exports = ExpressServer
