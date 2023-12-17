const mongoose = require("mongoose");

const schema = mongoose.Schema;
const user = new schema({
    category: String,
    subCategory: String,
    itemDescription: String,
    sellingPrice: Number,
    markedPrice: Number,
    numberOfSelling: Number,
    isAvailable: Boolean,
    isFavorite: Boolean,
    activeProduct: Object,
    filterAttributesList: Array,
    imgUrls: Array,
    highLights: Array,
    ratingsAndReviews: new Array({
        rating: Number,
        review: String,
        date: Number,
        userId: String,
        name: String,
        likes: Array,
        isVerifiedPurchase: Boolean,
        disLikes: Array,
    }),
    specifications: Object,
    ratingsAndReviewsDetails: Object,
}, { versionKey: false });

module.exports = mongoose.model("product", user, "product");
