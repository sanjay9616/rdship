const auth = require("../controllers/auth.controller");
const URL_LIST = require("../config/urlList.config");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.get(URL_LIST.API.ACCOUNT.AUTH_DATA.URL, auth.getAuthData);
    app.post(URL_LIST.API.ACCOUNT.LOGIN.URL, auth.login);
    app.post(URL_LIST.API.ACCOUNT.SIGNUP.URL, auth.signUp);
    app.patch(URL_LIST.API.ACCOUNT.VERIFY_USER.URL, auth.verifyUser);
    app.patch(URL_LIST.API.ACCOUNT.FORGET_PASSWORD.URL, auth.forgetPassword);
    app.post(URL_LIST.API.ACCOUNT.UPDATE_PROFILE.URL, auth.updateProfile);
    app.post(URL_LIST.API.CART_ITEMS.ADD_ITEM_TO_CART.URL, auth.addCartItem);
    app.get(URL_LIST.API.CART_ITEMS.GET_CART_ITEMS.URL, auth.getCartItems);
    app.delete(URL_LIST.API.CART_ITEMS.DELETE_CART_ITEM.URL, auth.deleteCartItem);
    app.patch(URL_LIST.API.CART_ITEMS.UPDATE_CART_QTY.URL, auth.updateCartQty);
};
