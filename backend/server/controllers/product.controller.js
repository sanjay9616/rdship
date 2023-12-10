const { ObjectId } = require("mongodb");
const product = require("../models/product.model");

exports.getAllProducts = (req, res) => {
    let body = req.body;
    let query = {};
    if (body.category.length) query.category = { $in: body.category };
    if (body.subCategories.length) query["subCategory"] = { $in: body.subCategories };
    if (body.brands.length) query["specifications.Brand"] = { $in: body.brands };
    if (body.sellingPrice) query["sellingPrice"] = { $gt: body.sellingPrice - 100, $lte: body.sellingPrice };
    if (body.rating) query["ratingsAndReviewsDetails.overAllRating"] = { $gte: body.rating };
    if (body.discountPercent) query["discountPercent"] = { $gte: body.discountPercent };
    product.find(query)
        .then((result) => {
            let pageDetails = {};
            pageDetails.totalItems = result.length;
            pageDetails.items = result;
            product.find()
                .then((result) => {
                    pageDetails.subCategories = removeDuplicate(result.map((item) => item.subCategory));
                    pageDetails.brands = removeDuplicate(result.map((item) => item.specifications.Brand));
                    res.status(200).json({ data: pageDetails, status: 200, success: true, message: "Product fetched successfully" })
                })
                .catch((err) => {
                    res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                })
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

exports.getItemInfo = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        product.findOne({ _id: new ObjectId(req.params.id) })
            .then((result) => {
                let itemDetails = result;
                product.find({ _id: { $nin: result._id }, category: result.category, subCategory: result.subCategory }).limit(30)
                    .then((result) => {
                        let similarProducts = result;
                        res.status(200).json({ data: { itemDetails: itemDetails, similarProducts: similarProducts }, status: 200, success: true, message: "Item data fetched successfully" })
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid Item id' })
    }
}

exports.changeSpecification = (req, res) => {
    product.findOne({ itemDescription: req.params.itemDescription, activeProduct: Object(req.body) })
        .then((result) => {
            if (result == null) {
                res.status(404).json({ data: null, status: 404, success: false, error: err, message: 'Not Available Item for this Specification' })
            } else {
                let itemDetails = result;
                product.find({ _id: { $nin: result._id }, category: result.category, subCategory: result.subCategory }).limit(30)
                    .then((result) => {
                        let similarProducts = result;
                        res.status(200).json({ data: { itemDetails: itemDetails, similarProducts: similarProducts }, status: 200, success: true, message: "Item data fetched successfully" })
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                    })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

removeDuplicate = (arr) => {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (JSON.stringify(arr[i]) == JSON.stringify(uniqueArr[j])) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}