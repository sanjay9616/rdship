const { ObjectId } = require("mongodb");
const account = require("../models/user.model");
const product = require("../models/product.model");

exports.getAuthData = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        account.findOne({ _id: new ObjectId(req.params.id) })
            .then((result) => {
                res.status(200).json({ data: result, status: 200, success: true, message: "User data fetched successfully" })
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }
}

exports.login = (req, res) => {
    account.findOne({ email: req.body.email, password: req.body.password })
        .then((result) => {
            if (result) {
                res.status(200).json({ data: result, status: 200, success: true, message: 'User login successfully!' })
            } else {
                res.status(400).json({ data: null, status: 400, success: false, message: 'Invalid Credential' })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
        })
}

exports.signUp = (req, res) => {
    account.findOne({ email: req.body.email })
        .then((result) => {
            if (result == null) {
                const user = req.body
                user.name = null
                user.gender = null
                user.isVerified = false
                user.address = []
                user.recentlyViewItems = []
                user.cartItems = []
                user.orderList = []
                user.wishList = []
                user.couponList = []
                user.notificationList = []
                account.create(user)
                    .then((result) => {
                        if (result) {
                            res.status(200).json({ data: result, status: 200, message: 'Account created successfully', success: true })
                        } else {
                            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })
            } else {
                res.status(409).json({ data: null, status: 409, message: 'User Already Exits', success: false })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

exports.verifyUser = (req, res) => {
    account.findOne({ email: req.body.email, mobileNo: req.body.mobileNo })
        .then((result) => {
            if (result == null) {
                res.status(401).json({ data: null, status: 401, success: false, message: 'Invalid Credential' })
            } else if (result.isVerified) {
                res.status(409).json({ data: null, status: 409, success: false, message: 'User already verified' })
            } else if (result.isVerified == false) {
                account.updateOne({ email: req.body.email, mobileNo: req.body.mobileNo }, { $set: { isVerified: true } })
                    .then((result) => {
                        if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                            res.status(200).json({ data: result, status: 200, success: true, message: 'User login successfully!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })
            } else {
                res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

exports.forgetPassword = (req, res) => {
    account.findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                account.updateOne({ email: req.body.email }, { $set: { password: req.body.password } })
                    .then((result) => {
                        if (result.acknowledged && result.modifiedCount == 1 && result.matchedCount == 1) {
                            res.status(200).json({ data: null, status: 200, success: true, message: "Password updated successfully" })
                        } else if (result.acknowledged && result.modifiedCount == 0 && result.matchedCount == 1) {
                            res.status(409).json({ data: null, status: 409, success: false, message: 'Please enter new password' })
                        } else {
                            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })

            } else {
                res.status(401).json({ data: null, status: 401, success: false, message: "User doesn't exists" })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

exports.updateProfile = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        account.findOne({ _id: new ObjectId(req.params.id) })
            .then((result) => {
                account.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
                    .then((result) => {
                        if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                            account.findOne({ _id: new ObjectId(req.params.id) })
                                .then((result) => {
                                    res.status(200).json({ data: result, status: 200, success: true, message: 'Profile updated successfully!' });
                                })
                                .catch((err) => {
                                    res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                })
                        } else if (result.acknowledged && result.modifiedCount == 0 && result.matchedCount == 1) {
                            res.status(409).json({ data: null, status: 409, success: false, message: 'Not updated anything!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }
}

exports.addCartItem = (req, res) => {
    let userId = req.params.id
    if (ObjectId.isValid(userId)) {
        account.findOne({ _id: userId })
            .then((result) => {
                let cartItems = result.cartItems
                let isItemExits = result.cartItems.some((item) => item._id == req.body._id);
                if (isItemExits) {
                    res.status(200).json({ data: cartItems, status: 204, success: true, message: 'Item Already Exits in the Cart.' });
                } else {
                    account.updateOne({ _id: userId }, { $push: { cartItems: req.body } })
                        .then((result) => {
                            if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                                account.findOne({ _id: userId })
                                    .then((result) => {
                                        res.status(200).json({ data: result.cartItems, status: 200, success: true, message: 'Item Added Successfully in the Cart.' })
                                    })
                                    .catch((err) => {
                                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                    })
                            } else {
                                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                            }
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
                }
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }

}

exports.addFavoriteItem = (req, res) => {
    let userId = req.params.id
    if (ObjectId.isValid(userId)) {
        account.findOne({ _id: userId })
            .then((result) => {
                let favoriteItems = result.wishList
                let isItemExits = result.wishList.some((item) => item._id == req.body._id);
                if (isItemExits) {
                    res.status(200).json({ data: favoriteItems, status: 204, success: true, message: 'Item Already Exits in the Favorite List.' });
                } else {
                    account.updateOne({ _id: userId }, { $push: { wishList: req.body } })
                        .then((result) => {
                            if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                                account.findOne({ _id: userId })
                                    .then((result) => {
                                        res.status(200).json({ data: result.wishList, status: 200, success: true, message: 'Item Added Successfully in the Wish List.' })
                                    })
                                    .catch((err) => {
                                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                    })
                            } else {
                                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                            }
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
                }
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }

}

exports.getCartItems = (req, res) => {
    let userId = req.params.id
    if (ObjectId.isValid(userId)) {
        account.findOne({ _id: userId })
            .then((result) => {
                res.status(200).json({ data: result.cartItems, status: 200, success: true, message: 'Cart Items Fetched Successfully.' });
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }
}

exports.getFavoriteItems = (req, res) => {
    let userId = req.params.id
    if (ObjectId.isValid(userId)) {
        account.findOne({ _id: userId })
            .then((result) => {
                res.status(200).json({ data: result.wishList, status: 200, success: true, message: 'Wish List Items Fetched Successfully.' });
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }
}

exports.deleteCartItem = (req, res) => {
    let userId = req.params.userId
    let itemId = req.params.itemId
    if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User Id' })
    } else if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid Item Id' })
    } else {
        account.updateOne({ _id: new ObjectId(userId) }, { $pull: { cartItems: { _id: new ObjectId(itemId) } } })
            .then((result) => {
                if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                    account.findOne({ _id: userId })
                        .then((result) => {
                            res.status(200).json({ data: result.cartItems, status: 200, success: true, message: 'Item Deleted Successfully.' })
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
                } else if (result.acknowledged && result.modifiedCount == 0 && result.matchedCount == 1) {
                    res.status(409).json({ data: null, status: 409, success: false, message: "Can't delete Item" })
                }
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something Went Wrong!' })
            })
    }
}

exports.deleteFavoriteItem = (req, res) => {
    let userId = req.params.userId
    let itemId = req.params.itemId
    if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User Id' })
    } else if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid Item Id' })
    } else {
        account.updateOne({ _id: new ObjectId(userId) }, { $pull: { wishList: { _id: itemId } } })
            .then((result) => {
                if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                    account.findOne({ _id: userId })
                        .then((result) => {
                            res.status(200).json({ data: result.wishList, status: 200, success: true, message: 'Item Deleted Successfully.' })
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
                } else if (result.acknowledged && result.modifiedCount == 0 && result.matchedCount == 1) {
                    res.status(409).json({ data: null, status: 409, success: false, message: "Can't delete Item" })
                }
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something Went Wrong!' })
            })
    }
}

exports.updateCartQty = (req, res) => {
    let userId = req.params.userId
    let itemId = req.params.itemId
    if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User Id' })
    } else if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid Item Id' })
    } else {
        if (req.body.numberOfItem > 0) {
            account.updateOne({ _id: new ObjectId(userId), "cartItems._id": itemId }, { $set: { "cartItems.$.numberOfItem": req.body.numberOfItem } })
                .then((result) => {
                    if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                        account.findOne({ _id: userId })
                            .then((result) => {
                                res.status(200).json({ data: result.cartItems, status: 200, success: true, message: 'Item Quantity Updated Successfully.' })
                            })
                            .catch((err) => {
                                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                            })
                    } else if (result.acknowledged && result.modifiedCount == 0 && result.matchedCount == 1) {
                        res.status(409).json({ data: null, status: 409, success: false, message: `Item Quantity Already ${req.body.numberOfItem}.` })
                    }
                })
                .catch((err) => {
                    res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something Went Wrong!' })
                })
        } else {
            res.status(400).json({ data: null, status: 400, success: false, message: "Item Quantity Should Greater Then 1" })
        }
    }
}

exports.addRecentlyViewItems = (req, res) => {
    let userId = req.params.id
    let itemId = req.body._id;
    if (ObjectId.isValid(userId)) {
        account.findOne({ _id: userId })
            .then((result) => {
                let isItemExits = result.recentlyViewItems.some((item) => item._id == req.body._id);
                if (isItemExits) {
                    account.updateOne({ _id: new ObjectId(userId) }, { $pull: { recentlyViewItems: { _id: itemId } } })
                        .then((result) => {
                            if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                                account.updateOne({ _id: new ObjectId(userId) }, { $push: { recentlyViewItems: { $each: [req.body], $position: 0 } } })
                                    .then((result) => {
                                        if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                                            account.findOne({ _id: userId })
                                                .then((result) => {
                                                    res.status(200).json({ data: result.recentlyViewItems, status: 200, success: true, message: 'Item Added Successfully in the Recently View.' })
                                                })
                                                .catch((err) => {
                                                    res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                                })
                                        } else {
                                            res.status(409).json({ data: null, status: 409, success: false, error: err, message: "Can't Insert Item" })
                                        }
                                    })
                                    .catch((err) => {
                                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                    })
                            } else {
                                res.status(409).json({ data: null, status: 409, success: false, error: err, message: "Can't delete Item" })
                            }
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
                } else {
                    account.updateOne({ _id: new ObjectId(userId) }, { $push: { recentlyViewItems: { $each: [req.body], $position: 0 } } })
                        .then((result) => {
                            if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                                account.findOne({ _id: userId })
                                    .then((result) => {
                                        res.status(200).json({ data: result.recentlyViewItems, status: 200, success: true, message: 'Item Added Successfully in the Recently View.' })
                                    })
                                    .catch((err) => {
                                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                    })
                            } else {
                                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                            }
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
                }
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }

}

exports.getHomeDetails = (req, res) => {
    let userId = req.params.id
    if (ObjectId.isValid(userId)) {
        account.findOne({ _id: new ObjectId(userId) }).limit(30)
            .then((result) => {
                let recentlyViewItems = result.recentlyViewItems
                product.find().sort({ numberOfSelling: 1 }).limit(30)
                    .then((result) => {
                        res.status(200).json({ data: { recentlyViewItems: recentlyViewItems, topSellingProducts: result }, status: 200, success: true, message: 'Home Deatils Fetched Successfully.' })
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })

    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    }
}
