const ContentUseCase = require('../../../application/usecases/v1/content/ContentUseCase')
const StatusCode = require('../../utils/StatusCode')

class ContentController {

    async getContent(req, res, err) {
        const result = await new ContentUseCase(req).getData()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

    async addContent(req, res, err) {
        const result = await new ContentUseCase(req).addData()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

    async updateContent(req, res, err) {
        const result = await new ContentUseCase(req).patchData()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

}

module.exports = ContentController