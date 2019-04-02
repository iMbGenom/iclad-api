const ContentRepository = require('../../../repositories/v1/content/ContentRepository')
const Content = require('../../../../domain/entities/v1/Content')
const Response = require('../../../../interfaces/utils/Response')

class ContentUseCase {

    constructor(req) {
        this.req = req
    }

    async addData() {
        const data = await new ContentRepository().addContent(this.req.body)
        return new Response(data.success, data.message, data.data, data.error)
    }

    async bannerPromo() {
        try {
            const getData = await new ContentRepository().getBannerPromo()
            return new Response(getData.success, getData.message, new Content(getData).dtoBannerList(), getData.error)
        } catch (error) {
            console.log(error)
            return new Response(false, 'error from exception', null, error)
        }
    }

    async bannerBottom() {
        try {
            const getData = await new ContentRepository().getBannerBottom()
            return new Response(getData.success, getData.message, new Content(getData).dtoBannerList(), getData.error)
        } catch (error) {
             console.log(error)
            return new Response(false, 'error from exception', null, error)
        }
    }
}

module.exports = ContentUseCase