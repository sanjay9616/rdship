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
  cartItems: Array,
  orderList: Array,
  wishList: Array,
  couponList: Array,
  notificationList: Array,
}, { versionKey: false });

module.exports = mongoose.model("account", user, "account");
