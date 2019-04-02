const ContentUseCase = require('../../../application/usecases/v1/content/ContentUseCase')
const StatusCode = require('../../utils/StatusCode')

class ContentController {

    async getContent(req, res, err) {
        const result = await new ContentUseCase(req).getContent()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

    async addContent(req, res, err) {
        const result = await new ContentUseCase(req).addContent()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

    async updateContent(req, res, err) {
        const result = await new ContentUseCase(req).putContent()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

    async deleteContent(req, res, err) {
        const result = await new ContentUseCase(req).deleteContent()
        const statusCode = new StatusCode(result.success)
        return res.status(statusCode.code).json(result)
    }

}

module.exports = ContentController