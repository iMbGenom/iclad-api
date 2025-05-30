/**
 * Version usecase is a business logic of version
 */
const VersionDomain = require('../../domain/entities/Version')

class Version {
    // display method show the current version number of this application
    display() {
        return VersionDomain.toString()
    }

    static toString() {
        return 'Version use case'
    }
}

module.exports = Version