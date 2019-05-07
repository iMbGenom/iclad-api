const ContentRepository = require('../../../repositories/v1/content/ContentRepository')
const Content = require('../../../../domain/entities/v1/Content')
const Response = require('../../../../interfaces/utils/Response')

class ContentUseCase {

    constructor(req) {
        this.req = req
        this.deleteData = { Status: 2 }
    }

    async getContent() {
        try {
            const data = await new ContentRepository().getContent(this.req.query)
            return new Response(data.success, data.message, data.data, data.error)
        } catch (error) {
            return new Response(false, 'error from exception', null, error)
        }
    }

    async addContent() {
        try {
            const data = await new ContentRepository().addContent(this.req.body)
            return new Response(data.success, data.message, data.data, data.error)
        } catch (error) {
            return new Response(false, 'error from exception', null, error)
        }
    }

    async putContent() {
        try {
            const data = await new ContentRepository().updateContent(this.req.params, this.req.body)
            return new Response(data.success, data.message, data.data, data.error)
        } catch (error) {
            return new Response(false, 'error from exception', null, error)
        }
    }

    async deleteContent() {
        try {
            const data = await new ContentRepository().updateContent(this.req.params, this.deleteData)
            return new Response(data.success, data.message, data.data, data.error)
        } catch (error) {
            return new Response(false, 'error from exception', null, error)
        }
    }
}

module.exports = ContentUseCase