class StatusCode {
    constructor(success) {
        if (success === true) this.code = 200
        if (success === false) this.code = 500
        // if (!success) this.code = 404
    }
}

module.exports = StatusCode