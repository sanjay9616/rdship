const product = require("../controllers/product.controller");
const URL_LIST = require("../config/urlList.config");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.post('/product/getProduct', product.getAllProducts);
    app.get('/view-item/:id', product.getItemInfo);
    app.post('/product/change-specification/:itemDescription', product.changeSpecification);
    app.post('/product/review/:userId/:itemId', product.submitProductReview);
    app.patch('/product/vote/:userId/:itemId/:ratingId/:vote', product.productVote);
};
