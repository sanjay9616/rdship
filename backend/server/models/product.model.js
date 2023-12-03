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
    ratingsAndReviews: Array,
    specifications: Object,
}, { versionKey: false });

module.exports = mongoose.model("product", user, "product");
