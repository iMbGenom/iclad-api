const baseUrl = process.env.API_SERVICE_PRODUCT

module.exports = {
    getCategory: baseUrl + 'category/',
    byCategoryId: baseUrl + 'product/by-category-id/',
    byBestSeller: baseUrl + 'product/by-best-seller/',
    bannerPromo: baseUrl + 'banner/promo',
    bannerBottom: baseUrl + 'banner/bottom'
}