const { ObjectId } = require("mongodb");
const product = require("../models/product.model");

exports.getAllProducts = (req, res) => {
    product.find()
        .then((result) => {
            let pageDetails = {};
            pageDetails.totalItems = result.length;
            pageDetails.subCategories = removeDuplicate(result.map((item) => item.subCategory));
            pageDetails.brands = removeDuplicate(result.map((item) => item.specifications.Brand));
            pageDetails.items = getItems(result);
            res.status(200).json({ data: pageDetails, status: 200, success: true, message: "Product fetched successfully" })
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

exports.getItemInfo = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        product.findOne({ _id: new ObjectId(req.params.id) })
            .then((result) => {
                let itemDetails = getItem(result);
                product.find({ _id: { $nin: result._id }, category: result.category, subCategory: result.subCategory }).limit(30)
                    .then((result) => {
                        let similarProducts = getItems(result);
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
                let itemDetails = getItem(result);
                product.find({ _id: { $nin: result._id }, category: result.category, subCategory: result.subCategory }).limit(30)
                    .then((result) => {
                        let similarProducts = getItems(result);
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

calculateDiscountPercent = (markedPrice, sellingPrice) => {
    return Number(((Number(markedPrice) - Number(sellingPrice)) / Number(markedPrice)) * 100);
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

sortItemsBySelling = (items) => {
    return items.sort((a, b) => Number(b.numberOfSelling) - Number(a.numberOfSelling));
}

getItems = (dataBase) => {
    let items = [];
    dataBase.forEach((item) => {
        addKeyValue = {};
        addKeyValue.discountPercent = calculateDiscountPercent(item.markedPrice, item.sellingPrice);
        addKeyValue.numberOfItem = Number(1);
        addKeyValue.ratingsAndReviewsDetails = getRatingsAndReviewsDetails(item.ratingsAndReviews);
        items.push({ ...item._doc, ...addKeyValue })
    })
    return sortItemsBySelling(items)
}

getItem = (dataBase) => {
    let item = { ...dataBase._doc };
    item.discountPercent = calculateDiscountPercent(item.markedPrice, item.sellingPrice);
    item.numberOfItem = Number(1);
    item.ratingsAndReviewsDetails = getRatingsAndReviewsDetails(item.ratingsAndReviews);
    return item;
}

sortItemsBySelling = (item) => {
    return item.sort((a, b) => Number(b.numberOfSelling) - Number(a.numberOfSelling));
}