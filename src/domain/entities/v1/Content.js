const ImageUrl = require('../../../constant/ImageUrl')

class Banner {

    constructor(bannerData) {
        this.bannerData = bannerData
    }

    dtoBannerList() {
        let objectResult = {}
        if (this.bannerData.data && this.bannerData.data.list.length > 0) {
            const listData = this.bannerData.data.list.map((item) => {
                const data = {}
                data.id = item.bnrId
                data.title = item.bnrDesck
                data.desc = ImageUrl.banner + item.bnrImage
                data.sort = item.bnrSortOrder
                return data
            })

            objectResult = {
                list: listData
            }
        }
        return objectResult
    }
}

module.exports = Banner