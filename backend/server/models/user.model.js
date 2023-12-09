const mongoose = require("mongoose");

const schema = mongoose.Schema;
const user = new schema({
  email: String,
  mobileNo: Number,
  password: String,
  name: String,
  gender: String,
  isVerified: Boolean,
  address: Array,
  recentlyViewItems: Array,
  cartItems: [{
    _id: String,
    category: String,
    subCategory: String,
    itemDescription: String,
    sellingPrice: Number,
    markedPrice: Number,
    numberOfSelling: Number,
    numberOfItem: Number,
    discountPercent: Number,
    isAvailable: Boolean,
    isFavorite: Boolean,
    activeProduct: Object,
    filterAttributesList: Array,
    imgUrls: Array,
    highLights: Array,
    ratingsAndReviews: Array,
    ratingsAndReviewsDetails: Object,
    specifications: Object,
  }],
  orderList: Array,
  wishList: Array,
  couponList: Array,
  notificationList: Array,
}, { versionKey: false });

module.exports = mongoose.model("account", user, "account");
