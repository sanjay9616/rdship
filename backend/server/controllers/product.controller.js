const { ObjectId } = require("mongodb");
const product = require("../models/product.model");

exports.getAllProducts = (req, res) => {
    product.find()
        .then((result) => {
            let pageDetails = {};
            pageDetails.totalItems = result.length;
            pageDetails.items = result;
            pageDetails.subCategories = removeDuplicate(result.map((item) => item.subCategory));
            pageDetails.brands = removeDuplicate(result.map((item) => item.specifications.Brand))
            res.status(200).json({ data: pageDetails, status: 200, success: true, message: "Product fetched successfully" })
        })
        .catch((err) => {
            console.log('2222',err)
            res.status(500).json({ data: null, status: 500, success: false, error: err, message: 'Something went wrong!' })
        })
}

removeDuplicate = (arr) => {
    let uniqueArr = [];
    for(let i=0; i<arr.length; i++) {
        let found = false;
        for(let j=0; j< uniqueArr.length; j++) {
            if(JSON.stringify(arr[i]) == JSON.stringify(uniqueArr[j])) {
                found = true;
                break;
            }
        }
        if(!found) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}