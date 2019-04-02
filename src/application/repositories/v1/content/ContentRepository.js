const ContentModel = require('../../../models/ContentModel')
const Url = require('../../../../constant/BaseUrl')
const BaseRepository = require('../BaseRepository')

class BannerRepository extends BaseRepository {
    
    async getContent(query) {
        let _result = {}
        _result.success = false
        _result.data = {}
        _result.message = 'Failed'
        _result.error = {}

        /* Pagination */
        const page = query.Page ? parseInt(query.Page) : 1
        const limit = 20
        const offset = (page - 1) * limit
        delete query.Page
        /* Pagination */
        query.Status = 1

        return new Promise((resolve, reject) => {
            ContentModel.getContent(query, offset, limit, (err, contents) => {
                if (err) {
                    _result.error = err
                } else {
                    _result.success = true
                    _result.message = 'Empty Data'
                    _result.data = contents
                    if (contents.length > 0) {
                        _result.message = 'Success'
                    }
                }
                resolve(_result)
            })
        })
    }

    async addContent(params) {
        let _result = {}
        _result.success = false
        _result.data = {}
        _result.message = 'Failed'
        _result.error = {}

        const contentModel = new ContentModel()
        contentModel.Type = params.Type
        contentModel.CategoryId = params.CategoryId
        contentModel.Slug = params.Slug
        contentModel.Title = params.Title
        contentModel.SubTitle = params.SubTitle
        contentModel.Body = params.Body
        contentModel.Caption = params.Caption
        contentModel.Description = params.Description
        contentModel.ImagePath = params.ImagePath
        contentModel.ImageUrl = params.ImageUrl
        contentModel.VideoPath = params.VideoPath
        contentModel.VideoUrl = params.VideoUrl
        contentModel.Keyword = params.Keyword
        contentModel.CreatedBy = params.CreatedBy
        contentModel.UpdatedBy = params.UpdatedBy
        contentModel.CreatedAt = Math.round((new Date()).getTime() / 1000)
        contentModel.UpdatedAt = 0
        contentModel.Status = 1

        return new Promise((resolve, reject) => {
            contentModel.save((err, content) => {
                if (err) {
                    _result.error = err
                } else {
                    _result.success = true
                    _result.message = 'Success'
                    _result.data = content
                }
                resolve(_result)
            })
        })
    }

    async updateContent(query, params) {
        let _result = {}
        _result.success = false
        _result.data = {}
        _result.message = 'Failed'
        _result.error = {}

        return new Promise((resolve, reject) => {
            ContentModel.updateOneContent(query, params, (err, callback) => {
                if (err) {
                    _result.message = 'Failure fetch data'
                    _result.error = err
                }
                if (callback.nModified == 1 && callback.ok == 1) {
                    _result.return = true
                    _result.message = 'Success'
                } else {
                    _result.message = 'Failed, there is no data have been modified'
                }
                resolve(_result)
            })
        })
    }

    async getBannerPromo() {
        const options = {
            uri: Url.bannerPromo,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true, // Automatically parses the JSON string in the response
            resolveWithFullResponse: true,
            time: true
        }
        return await this.getDataFromService(options)
    }

    async getBannerBottom() {
        const options = {
            uri: Url.bannerBottom,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true, // Automatically parses the JSON string in the response
            resolveWithFullResponse: true,
            time: true
        }
        return await this.getDataFromService(options)
    }
}

module.exports = BannerRepository