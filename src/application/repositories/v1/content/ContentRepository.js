const ContentModel = require('../../../models/ContentModel')
const Url = require('../../../../constant/BaseUrl')
const BaseRepository = require('../BaseRepository')

class BannerRepository extends BaseRepository {
    
    async addContent(params) {
        const contentModel = new ContentModel()
        let _result = {}
        _result.success = false
        _result.data = {}
        _result.message = 'Failed'
        _result.error = {}

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