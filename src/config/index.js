if (process.env.NODE_ENV === 'production' || process.env.ENV === 'prod') {
    module.exports = require('./production.js')
} else if (process.env.NODE_ENV === 'staging' || process.env.ENV === 'stag') {
    module.exports = require('./staging.js')
} else {
    module.exports = require('./development.js')
}