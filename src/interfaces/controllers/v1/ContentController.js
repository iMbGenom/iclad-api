const ContentUseCase = require('../../../application/usecases/v1/content/ContentUseCase')

class ContentController {

    async getContent(req, res, err) {
        const result = await new ContentUseCase(req).getData()
        return res.json(result)
    }
    async sendContent(req, res, err) {
        const result = await new ContentUseCase(req).addData()
        return res.json(result)
    }

}

module.exports = ContentController