const ContentUseCase = require('../../../application/usecases/v1/content/ContentUseCase')

class ContentController {

    async sendContent(req, res, err) {
        const result = await new ContentUseCase(req).addData()
        return res.json(result)
    }

}

module.exports = ContentController