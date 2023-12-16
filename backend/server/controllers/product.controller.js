const { ObjectId } = require("mongodb");
const { schema } = require("../models/product.model");
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

exports.submitProductReview = (req, res) => {
    let userId = req.params.userId;
    let itemId = req.params.itemId;
    let body = req.body
    if (!ObjectId.isValid(userId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid User id' })
    } else if (!ObjectId.isValid(itemId)) {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid Item id' })
    } else {
        product.findOne({ _id: new ObjectId(itemId) })
            .then((result) => {
                let ratingsAndReviews = result.ratingsAndReviews;
                let ratingsAndReviewsDetails = getRatingsAndReviewsDetails([...ratingsAndReviews, body])
                product.updateOne(
                    { _id: itemId },
                    {
                        $set:
                        {
                            "ratingsAndReviewsDetails.overAllRating": ratingsAndReviewsDetails.overAllRating,
                            "ratingsAndReviewsDetails.numberOfRating": ratingsAndReviewsDetails.numberOfRating,
                            "ratingsAndReviewsDetails.numberOfReview": ratingsAndReviewsDetails.numberOfReview,
                            "ratingsAndReviewsDetails.totalFive": ratingsAndReviewsDetails.totalFive,
                            "ratingsAndReviewsDetails.totalFour": ratingsAndReviewsDetails.totalFour,
                            "ratingsAndReviewsDetails.totalThree": ratingsAndReviewsDetails.totalThree,
                            "ratingsAndReviewsDetails.totalTwo": ratingsAndReviewsDetails.totalTwo,
                            "ratingsAndReviewsDetails.totalOne": ratingsAndReviewsDetails.totalOne,
                        },
                        $push:
                        {
                            ratingsAndReviews: req.body
                        }
                    },
                    { upsert: true })
                        .then((result) => {
                            product.findOne({ _id: new ObjectId(itemId) })
                                .then((result) => {
                                    res.status(200).json({ data: result, status: 200, success: true, message: "Item Review Updated successfully" })
                                })
                                .catch((err) => {
                                    res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                                })
                        })
                        .catch((err) => {
                            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
                        })
            })
    }
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

getRatingsAndReviewsDetails = (ratingsAndReviews) => {
    let ratingsAndReviewsDetails = {};
    let totalRating = 0;
    let totalReview = 0;
    let totalFive = 0;
    let totalFour = 0;
    let totalThree = 0;
    let totalTwo = 0;
    let totalOne = 0;
    for (let i = 0; i < ratingsAndReviews.length; i++) {
        totalRating += Number(ratingsAndReviews[i].rating);
        if (ratingsAndReviews[i].review.length) totalReview += 1;
        if (ratingsAndReviews[i].rating === 5) totalFour += 1;
        if (ratingsAndReviews[i].rating === 4) totalFive += 1;
        if (ratingsAndReviews[i].rating === 3) totalThree += 1;
        if (ratingsAndReviews[i].rating === 2) totalTwo += 1;
        if (ratingsAndReviews[i].rating === 1) totalOne += 1;
    }
    ratingsAndReviewsDetails.overAllRating = Number(Number(totalRating) / Number(ratingsAndReviews?.length));
    ratingsAndReviewsDetails.numberOfRating = Number(ratingsAndReviews.length);
    ratingsAndReviewsDetails.numberOfReview = Number(totalReview);
    ratingsAndReviewsDetails.totalFive = Number(totalFive);
    ratingsAndReviewsDetails.totalFour = Number(totalFour);
    ratingsAndReviewsDetails.totalThree = Number(totalThree);
    ratingsAndReviewsDetails.totalTwo = Number(totalTwo);
    ratingsAndReviewsDetails.totalOne = Number(totalOne);
    return ratingsAndReviewsDetails
}