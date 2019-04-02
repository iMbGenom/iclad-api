const mongoose = require('mongoose')

const contentSchema = mongoose.Schema({
    Type: {
        type: String
    },
    CategoryId: {
        type: String
    },
    Slug: {
        type: String
    },
    Title: {
        type: String
    },
    SubTitle: {
        type: String
    },
    Body: {
        type: String
    },
    Caption: {
        type: String
    },
    Description: {
        type: String
    },
    ImagePath: {
        type: String
    },
    ImageUrl: {
        type: String
    },
    VideoPath: {
        type: String
    },
    VideoUrl: {
        type: String
    },
    Keyword: {
        type: String
    },
    CreatedBy: {
        type: String
    },
    UpdatedBy: {
        type: String
    },
    CreatedAt: {
        type: Number
    },
    UpdatedAt: {
        type: Number
    },
    Status: {
        type: Number
    }
})

const Content = module.exports = mongoose.model('Content', contentSchema)

module.exports.getContent = (query, offset, limit, callback) => {
    const urutan = {
        CreatedAt: -1
    }

    Content.find(query, callback).sort(urutan).skip(offset).limit(limit)
}
