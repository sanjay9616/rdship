const { ObjectId } = require("mongodb");
const account = require("../models/user.model");

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