require('dotenv').config()
const ExpressWebServer = require('./src/infrastructure/webserver/server')
const VersionInteractor = require('./src/application/usecases/version')
const WebServerInterface = require('./src/interfaces/webserver')

const versionInteractor = new VersionInteractor()
const webserverInterface = new WebServerInterface({
    VersionInteractor: versionInteractor
})
const expressWebServer = new ExpressWebServer({
    WebServerInterface: webserverInterface
})

expressWebServer.start()