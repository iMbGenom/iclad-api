const rp = require('request-promise')

class BaseRepository {
    async getDataFromService(options) {
        let _result = {}
        _result.success = false
        _result.data = {}
        _result.msg = 'Failed'
        _result.error = {}
        try {
            const response = await rp(options)
            if (response.statusCode !== 200) {
                _result.msg = response.body.error ? response.body.error.messsage : 'custom error'
                return _result
            }
            if (!response.body.success) {
                _result.msg = response.body.error ? response.body.error.messsage : 'custom error'
                _result.error = response.body.error
                return _result
            }
        
            _result.success = true
            _result.msg = 'Success'
            _result.data = response.body.data
            return _result
        } catch (err) {
            _result.error = err
            return _result
        }
    }
}

module.exports = BaseRepository